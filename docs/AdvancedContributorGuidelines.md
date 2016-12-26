# Advanced Contributor Guidelines

## Choosing issues

* Follow issue priorities. Prefer to take higher priority issues over lower priority issues.
* Favor issues related to certain features/aspects/techs to deepen expertise in those areas. 
 
## Creating commits in big PRs

Big PRs are hard to review. More systematic committing (as explained below) can ease the workload of the reviewer.
 
* Plan your PR as a sequence of steps, each step advancing the code base in a logical step towards 
  the end goal of the PR. The build should pass at each step.
* Commit each step as a separate commit. You may have to `squash` trivial commits or reorder commits to make the steps
  more logical. In the end, the series of commits should match the exact sequence of steps.
* Write more detailed commit messages as if you were explaining your commit to a future developer.
* Post a summary of your commits in the PR description so that the reviewer can refer to them easily in review comments.
  Here is an example (adapted from [this PR](https://github.com/CS2103AUG2016-T11-C4/main/pull/120)). 
  
  ```
  Rework tests so that they do not depend on new Task().
  
  [1/4] TaskBook::resetData(): replace floating/event/deadline task data as well
  [2/4] logic: remove non-TaskTracker related commands
  [3/4] testutil: remove SerializableTestClass
  [4/4] testutil: remove TaskBookBuilder
  ```
  
  > TODO : add a link to the page for generating PR summary
  
## Updating a PR in response to a review
  
* If the `master` has progressed beyond the root of the PR branch, rebase the PR branch 
  (instead of merging master to PR branch). This will keep the PR branch free of merge commits.
* Commits done to fix problems mentioned in the review should be squashed onto the relevant existing commits in the 
  branch (if applicable).
* Post a new commit summary (if applicable) when the PR is ready for another review. Here is an example.

  ```
  v2
  Rework tests so that they do not depend on new Task().
  
  [1/5] TaskBook::resetData(): replace floating/event/deadline task data as well - Unchanged
  [2/5] logic: remove non-TaskTracker related commands - Unchanged
  [3/5] testutil: remove SerializableTestClass - Unchanged
  [4/5] testutil: unify two equality methods - New
  [4/5] testutil: remove TaskBookBuilder - Updated
  ```