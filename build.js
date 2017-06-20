'use strict';
const assert = require('assert');
const path = require('path');
const thenify = require('thenify');
const asciidoctor = require('asciidoctor.js')();
const rimraf = thenify(require('rimraf'));
const fs = require('mz/fs');
const glob = thenify(require('glob'));
const mkdirp = thenify(require('mkdirp'));
const chokidar = require('chokidar');
const AsyncLock = require('async-lock');

const stylesDir = path.join(__dirname, 'styles');
const destDir = 'dist';
const pathsToIgnore = [
    'node_modules',
    'node_modules/**',
    `${destDir}`,
    `${destDir}/**`,
    'package.json',
    'build.js', // this file
    'oss-generic-process-*.tgz', // tgz file generated by `npm pack`
];
const lock = new AsyncLock();

if (require.main === module) {
    switch (process.argv[2]) {
    case 'rebuild':
        clean().then(build).catch(onError);
        break;
    case 'build':
    case undefined:
        build().catch(onError);
        break;
    case 'clean':
        clean().catch(onError);
        break;
    case 'watch':
        watch().catch(onError);
        break;
    default:
        throw new Error(`Unknown command ${process.argv[2]}`);
    }
}

async function build() {
    await buildAsciidocFiles();
    await copyMediaFiles();
}

async function buildAsciidocFiles() {
    const adocFiles = await glob('**/*.adoc', {
        ignore: pathsToIgnore,
        nodir: true,
    });
    for (const adocFile of adocFiles) {
        await asciidocToHtml(adocFile);
    }
}

async function asciidocToHtml(adocFile) {
    assert(adocFile.endsWith('.adoc'));
    console.log('asciidocToHtml', adocFile);

    const relativeStylesDir = path.relative(path.dirname(adocFile), stylesDir);
    const asocInput = await fs.readFile(adocFile, 'utf-8');
    const htmlOutput = asciidoctor.convert(asocInput, {
        safe: 'safe',
        doctype: 'article',
        header_footer: true,
        attributes: [
            'linkcss',
            `stylesdir=${relativeStylesDir}`,
            'experimental',
            'sectlinks',
            'idprefix=',
            'idseparator=-',
            'source-highlighter=highlightjs',
        ],
        base_dir: path.dirname(adocFile),
    });
    const outputFile = path.join(destDir, path.dirname(adocFile), path.basename(adocFile, '.adoc')) + '.html';
    await mkdirp(path.dirname(outputFile));
    if (path.basename(adocFile) === 'README.adoc') {
        const indexOutputFile = path.join(destDir, path.dirname(adocFile), 'index.html');
        await fs.writeFile(indexOutputFile, htmlOutput, 'utf-8');
        await writeRedirectPage(outputFile);
        return;
    }
    await fs.writeFile(outputFile, htmlOutput, 'utf-8');
}

async function writeRedirectPage(file) {
    const content = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="refresh" content="0; url=index.html">
            </head>
            <body>
                Redirecting to <a href="index.html">index.html</a>
            </body>
        </html>
    `.trim();
    await fs.writeFile(file, content, 'utf-8');
}

async function copyMediaFiles() {
    const mediaFiles = await glob('**/*', {
        ignore: pathsToIgnore.concat(['**/*.adoc']),
        nodir: true,
    });
    for (const mediaFile of mediaFiles) {
        copyMediaFile(mediaFile);
    }
}

async function copyMediaFile(mediaFile) {
    console.log('copyMediaFile', mediaFile);
    const outputFile = path.join(destDir, mediaFile);
    await mkdirp(path.dirname(outputFile));
    await copyFile(mediaFile, outputFile);
}

function copyFile(src, dst) {
    return new Promise((resolve, reject) => {
        const srcStream = fs.createReadStream(src);
        const dstStream = fs.createWriteStream(dst);
        const onError = err => {
            srcStream.destroy();
            dstStream.end();
            reject(err);
        };
        srcStream.on('error', onError);
        dstStream.on('error', onError);
        dstStream.on('finish', resolve);
        srcStream.pipe(dstStream);
    });
}

async function clean() {
    await rimraf(destDir);
}

async function watch() {
    await build();
    watchAsciidocFiles();
    watchMediaFiles();
}

function watchAsciidocFiles() {
    const watcher = chokidar.watch('**/*.adoc', {
        ignored: pathsToIgnore,
        awaitWriteFinish: true,
        ignoreInitial: true,
    });
    const onChange = path => {
        lock.acquire('', asciidocToHtml.bind(undefined, path)).catch(err => console.error(err));
    };
    watcher.on('add', onChange);
    watcher.on('change', onChange);
}

function watchMediaFiles() {
    const watcher = chokidar.watch('.', {
        ignored: pathsToIgnore.concat(['**/*.adoc', /(^|[\/\\])\../]),
        awaitWriteFinish: true,
        ignoreInitial: true,
    });
    const onChange = path => {
        lock.acquire('', copyMediaFile.bind(undefined, path)).catch(err => console.error(err));
    };
    watcher.on('add', onChange);
    watcher.on('change', onChange);
}

function onError(err) {
    console.error(err);
    process.exit(1);
}