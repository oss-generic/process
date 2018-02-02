'use strict';
const assert = require('assert');
const path = require('path');
const asciidoctor = require('asciidoctor.js')();
const fs = require('fs-extra');
const glob = require('glob');

/** Directory where asciidoctor stylesheets are stored. */
const stylesDir = path.join(__dirname, 'styles');
/** Destination directory. */
const destDir = 'dist';
/** `glob` paths to ignore */
const pathsToIgnore = [
    'node_modules',
    'node_modules/**',
    `${destDir}`,
    `${destDir}/**`,
    'package.json',
];

if (require.main === module) {
    fs.remove(destDir).then(buildAllFiles).catch(onError);
}

/**
 * Builds all files in the current directory and all of its subdirectories.
 */
async function buildAllFiles() {
    const filenames = glob.sync('**/*', {
        ignore: pathsToIgnore,
        nodir: true,
    });

    for (const filename of filenames) {
        await buildFile(filename);
    }
}

/**
 * Builds a file.
 *
 * @param {string} filename - The file to build. Must not be an ignored file.
 */
async function buildFile(filename) {
    if (filename.endsWith('.adoc')) {
        await asciidocToHtml(filename);
    } else {
        await copyMediaFile(filename);
    }
}

/**
 * Renders an asciidoc file into a HTML file.
 *
 * @param {string} adocFilename - The asciidoc file to render.
 */
async function asciidocToHtml(adocFilename) {
    console.log('asciidocToHtml', adocFilename);
    const relativeStylesDir = path.relative(path.dirname(adocFilename), stylesDir);
    const asocInput = await fs.readFile(adocFilename, 'utf8');
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
        base_dir: path.dirname(adocFilename),
    });
    const outputFilename = path.join(destDir, path.dirname(adocFilename), path.basename(adocFilename, '.adoc')) + '.html';
    await fs.mkdirs(path.dirname(outputFilename));

    if (path.basename(adocFilename) === 'README.adoc') {
        const indexOutputFilename = path.join(destDir, path.dirname(adocFilename), 'index.html');
        await fs.writeFile(indexOutputFilename, htmlOutput);
        await writeRedirectPage(outputFilename);
    } else {
        await fs.writeFile(outputFilename, htmlOutput);
    }
}

/**
 * Writes a redirect page to `filename` that redirects to `index.html`.
 *
 * @param {string} filename - File to write the redirect page to.
 */
async function writeRedirectPage(filename) {
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
    await fs.writeFile(filename, content);
}

/**
 * Copy a media file to the destination directory.
 *
 * @param {string} mediaFilename - Media filename to copy.
 */
async function copyMediaFile(mediaFilename) {
    console.log('copyMediaFile', mediaFilename);
    const outputFilename = path.join(destDir, mediaFilename);
    await fs.mkdirs(path.dirname(outputFilename));
    await fs.copy(mediaFilename, outputFilename);
}

/**
 * Fatal error handler.
 */
function onError(err) {
    console.error(err);
    process.exit(1);
}
