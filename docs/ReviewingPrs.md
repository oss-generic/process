# Reviewing PRs

A typical PR must be reviewed by,
 - [x] one lead member (i.e. the main reviewer)
 - [x] PM

Additional reviewers may be used if the PR involves multiple areas.

> Junior members can get their PRs _peer reviewed_ by another junior member before submitting to the project's formal 
review process.

## Review procedure

A reviewer must do the following steps.

1. Ensure the following at the start of the review. If any of them are missing, ask the dev to fix.
  - [x] PR name follows the [PR title convention](FormatsAndConventions.md#pr). 
  - [x] PR description has the correct `Fixes #...` reference.
  - [x] The CI build is successful or any failures are justifiable (e.g. false positives from static analysis tools).
  - [x] The branch is up to date with the `master` branch.
  - [x] PR branch name follows the [branch naming convention](FormatsAndConventions.md#branch). 
  
    > 'Incorrect branch name' can be forgiven for those doing their first issue, 
    >  but remind the dev to follow the convention in future PRs.
  
1. Ensure the following:
  - [x] The solution is the best possible solution to the problem under the circumstances.
  * **All five aspects** of a code change are done:
    - [x] **Code**
    - [x] **Comments** e.g. header comments
    - [x] **Tests**:  Almost all code changes to functional code should have changes to test code
    - [x] **User docs** e.g. help pages
    - [x] **Dev docs** e.g. design diagrams
  - [x] Coding style and best practices are followed (some of these are not detected by static analysis tools).
  - [x] The PR does not contain unrelated changes. 
      e.g. unnecessary formatting changes or commits from other branches.

1. Use GitHub's review feature to add comments.
   * Use `start a review` option when adding comments on the latest version of a PR diff. 
     Use the `add single comment` when responding to an existing thread of discussion in a PR diff.
   * Do not use `Approve` unless you are fully satisfied with the current state of the PR. <br>
   i.e. NOT allowed: `Let me approve this first while you fix the remaining minor problems`.

## Tips for reviewers

* **To hide white space changes from being shown in the diff**, 
  append `?w=1` to url of the `/files` page of the pull request (the "Files changed" tab)

* **If the PR is too big**, explore the possibility of breaking the PR into multiple self-contained steps
  as explained in [Creating commits in big PRs](AdvancedContributorGuidelines.md#creating-commits-in-big-prs)here. 
  If the intermediate steps are not releasable, 
  [long-lived feature branches](HowToGuides.md#implement-big-features-using-long-lived-feature-branches)
  should be used instead.

## Canned comments

// TODO: add common comments that can be used when reviewing