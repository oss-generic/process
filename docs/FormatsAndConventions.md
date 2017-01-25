# Formats and Conventions

## Branch

Format: **`issueNumber-some-keywords-from-issue-title`**

e.g. if the issue title is `Error alert email has very long subject #5958`, <br>
the branch name can be `5958-error-alert-long-subject`

Note: Use only _some_ (not _all_) keywords from the issue title (e.g. 3-5 keywords). Very long branch names 
are not desirable.

> Rationale: This format allows easy traceability between a branch and the issue it fixes. 
> It is particularly suitable for projects following a branch-per-issue workflow.

## Commit message

Every commit must have a well written commit message _**subject line**_.
 
1. Limit the subject line to 50 characters
1. Capitalize the subject line
1. Do not end the subject line with a period
1. Use the imperative mood in the subject line
   e.g. `Add README.md` rather than `Added README.md` or `Adding README.md`

Commit messages for non-trivial commits should have a _**body**_ giving details of the commit.
 
1. Separate subject from body with a blank line
1. Wrap the body at 72 characters
1. Use the body to explain what and why vs. how

Here is an example (adapted from [this commit](https://github.com/CS2103AUG2016-T11-C4/main/pull/2/commits/5c5b12d1a75c4a73a8330bfd05e406233694ffa3)):
 
 ```
 Group overloaded methods together
 
 To make it easier to see the different ways a method can be called, 
 we should group them together.
 
 Note that this is not required strictly by the coding standard.
 ```
  
Refer to the article _[How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/)_ for a more detailed explanation.

## Commit organization

> _Ask a programmer to review 10 lines of code, he'll find 10 issues. Ask him to do 500 lines and he'll say it 
> looks good. [[source](https://twitter.com/girayozil/status/306836785739210752)]_

Commits of a PR should be organized to match the following requirements:

- [x] Each commit contains a single logical change, and this change must stand on its own. 
  i.e. each commit has a single responsibility, and that responsibility must be fully carried out.<br>
  For example, if the commit message says `Move delete() from Person class to Address class`, the commit cannot 
  contain the addition of `delete()` to `Address` class only; it should also contain the deletion of `delete()` from
  the `Person` class for it to be a _complete_ implementation what is stated in the commit message. <br>
  Furthermore, the series of commits in the PR are ordered in a bottom-up fashion, each commit building 
  on top of each other towards the end goal of the PR.
  
  > Rationale: Reviewers should be able to review one commit at a time.
  
- [x] A commit should not modify more than 100 lines of code. 
  
  > Rationale: Bigger commits make reviewing harder.

  Commits containing _**mechanical changes**_ (e.g. automated refactorings, cut-paste type code movements, 
  file renames, etc.),

    * should include only one _mechanical change_  per commit.
    * should not contain other non-mechanical changes, unless unavoidable.
    * can exceed 100 LoC.
    * should have the description of the change in the commit message (so that the results can be reproduced). 
  
- [x] The build passes at each commit of the PR.

  > Rationale: Build-breaking commits in the version history hinder the ability to use `git bisect` for locating bugs.

- [x] Each commit has a detailed commit message which explains the context and rationale behind the commit. 
  
  > More info: 
  > 
  > * [Our conventions for commit messages](#commit-message)
  > * [Web article] _[How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/)_ 

<p>

> [Here](https://github.com/se-edu/addressbook-level4/pull/237) is an example of a PR that is organized 
> as described above.

<p>

> **Note for first time contributors**:
> 
> * PRs for `d.FirstTimers` issues are usually simple enough to be contained in one commit. 
  
## Directory

* If the project uses a framework that has a specific folder naming convention, follow that instead.
* Use lowerCamelCase (similar to java methods) whenever possible. e.g. `testData`
* Prefer plurals if the folder contains multiple items of same type e.g. `docs` instead of `doc`

## File

* If the project uses a framework that has a specific file naming convention, follow that instead.
* Use UpperCamelCase (similar to java class names) whenever possible. e.g. `FormatsAndConventions.md`
* If the file name has multiple phrases, use `-` to separate phrases. e.g. `CodingStyle-JavaBasic.html`
* Try to user common prefixes so that similar files appear together when sorted by name. 
  e.g. prefer `CodingStyle-JavaBasics.html` and `CodingStyle-HtmlBasics.html` to 
  `JavaCodingStyleBasics.html` and `HtmlCodingStyleBasics.html`
* For documents, try to make the file name match the document title as much as possible.

## Issue

* Issue title should be concise yet descriptive.<br>
  For example, instead of `Newbie question, please help`, use `How do I set up git to ignore test files?`

* The phrasing should match the main purpose of the issue.<br>
  For example, if it is a bug report, the issue title should sound like a bug report 
  (e.g `Option 'other' is missing from the dropdown`) instead of a feature request 
  (e.g. `Add 'other' option to the dropdown`).

## Merge commit

This format is only for commits merging a PR branch to `master` branch.

Format: **`[#IssueNumber] Issue Title (#PrNumber)`** <br>
e.g. `[#5958] Error alert email has very long subject (#6580)`

> Rationale: This format allows easy traceability among a merge commit, the issue it fixes, and the PR that fixed it. 
> Having the issue name tells us what the commit is about without having to look it up in GitHub issue tracker.

## PR

Format: **`IssueTitle #IssueNumber`** <br>
e.g. `Error alert email has very long subject #5958`

> Rationale: Duplicating issue title in PR title is for easy tracing between PRs and issues, 
> to compensate for GitHub's lack of strong linking between the two.
> Assume there is an invisible prefix in front of the PR title `Fixes issue : ...`

## Spelling

Use American English spelling.

> Rationale: Consistent spelling improves discoverability of API methods.