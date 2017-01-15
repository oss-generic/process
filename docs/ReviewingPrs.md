# Reviewing PRs

A typical PR is reviewed by,
 - [x] one _**main reviewer**_: Usually, a lead member. Reviews _all_ aspects of the PR, including code quality. 
 - [x] one _**code quality reviewer**_: Usually, the Project Manager. Can be delegated to a Project Mentor. 
       Performs a final check on the quality of the PR. 
 - [ ] [Optional] _**supplementary reviewers**_: Core members can be used as additional reviewers if the PR involves
       multiple areas. 

> Junior members can get another junior member to act as a _**peer reviewer**_ for their PRs before submitting 
> to the project's formal review process.

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
  
1. As you review the code, ensure the following:
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
   
1. Approve or request changes at the end of the review.
   * If changes are needed, choose `Request changes`.
     Also change the status label to `s.Ongoing`.
   * Else, choose `Approve`. If you are the main reviewer, change status to `s.ToMerge`. 
   
   > Do not use `Approve` unless you are fully satisfied with the current state of the PR. <br>
       i.e. NOT allowed: `Let me approve this first while you fix the remaining minor problems`.

## Tips for reviewers

## Canned comments

// TODO: add common comments that can be used when reviewing
