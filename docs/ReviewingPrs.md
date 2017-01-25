# Reviewing PRs

A typical PR is reviewed by,
 - [x] one _**main reviewer**_: Usually, a lead member. Reviews _all_ aspects of the PR, including code quality. 
 - [x] one _**code quality reviewer**_: Usually, the Project Manager. Can be delegated to a Project Mentor. 
       Performs a final check on the quality of the PR. 
 - [ ] [Optional] _**supplementary reviewers**_: Core members can be used as additional reviewers if the PR involves
       multiple areas. 

> Junior members can get other junior members to act as _**peer reviewers**_ for their PRs before submitting 
> to the project's formal review process.

## Review procedure

1. Ensure the following at the start of the review. If any of them are missing, ask the dev to fix.
   
   - [x] PR name follows the [PR title convention](FormatsAndConventions.md#pr). 
   - [x] PR description has the correct `Fixes #...` reference.
   - [x] The CI build is successful or any failures are justifiable (e.g. false positives from static analysis tools).
   - [x] PR branch name follows the [branch naming convention](FormatsAndConventions.md#branch).
         * This is a soft requirement. Encourage the dev to follow the convention in future PRs.
   - [x] Meets our [requirements for commit organization](FormatsAndConventions.md#commit-organization). 
   - [x] Commit summary has been generated using CanIHasReview. 

   <p>

   > These two requirements are automatically guaranteed by CanIHasReview:
   > 
   > - [x] The branch is up to date with the `master` branch at the time of the review request.
   > - [x] The branch does not contain merge commits.
 
   Additional guidelines for `d.FirstTimers` issues:

   * Ensure the dev has not done any other `d.FirstTimers` issues. If he has, inform the dev and close the PR.
   * If the branch contains multiple commits, ask the dev to squash into one commit (unless the commits are 
     'well-organized' already).
   * If the commit message is far from our quality expectations even after 1-2 attempts to improve it by the dev, 
     you can propose a revised commit message for the dev to use. 

1. Review the PR and add comments.
    
   * Use GitHub's review feature to add comments.
     * Use `start a review` option when adding comments on the latest version of a PR diff. 
     * Use the `add single comment` when responding to an existing thread of discussion in a PR diff.
     
  * Review big PRs incrementally (i.e. one commit at a time), starting with the earliest commit. 
    [Here](https://github.com/se-edu/addressbook-level4/pull/209#pullrequestreview-15603608) is an example.
  
    > Rationale: If the early commits require lot of changes, there's no need to review later commits until the 
    > early commits are updated as per review.

  * As you review the code, ensure the following:
    - [x] The solution is the best possible solution to the problem under the circumstances.
    - [x] **All five aspects** of a code change are done:
      - [x] **Code**
      - [x] **Comments** e.g. header comments
      - [x] **Tests**:  Almost all code changes to functional code should have changes to test code
      - [x] **User docs** e.g. help pages
      - [x] **Dev docs** e.g. design diagrams
    - [x] Coding style and best practices are followed (some of these are not detected by static analysis tools).
    - [x] The PR does not contain unrelated changes. 
        e.g. unnecessary formatting changes or commits from other branches.
    - [x] All your previous review comments have been addressed.
    - [x] Commit messages follow [our requirements](FormatsAndConventions.md#commit-messages) .

   
1. Approve or request changes at the end of the review.
   * If changes are needed, choose `Request changes`.
   * Else, choose `Approve`. 
   
   > Do not use `Approve` unless you are fully satisfied with the current state of the PR. <br>
       i.e. NOT allowed: `Let me approve this first while you fix the remaining minor problems`.

1. If you are the last reviewer to review the current iteration (i.e. no more pending reviews for the 
   current iteration), change the status label as follows:
   
   * If any of the reviewers have requested changes, change the status label to `s.Ongoing`.
   * Else, change status to `s.ToMerge`. 

## Tips for reviewers

## Canned comments

// TODO: add common comments that can be used when reviewing
