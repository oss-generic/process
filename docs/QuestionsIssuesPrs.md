# Workflow for submitting Questions, Issues and PRs

* [Asking a Question](#asking-a-question)
* [Posting an Issue](#posting-an-issue)
* [Submitting a PR](#submitting-a-pr)

## Asking a Question

Post your question in the issue tracker.<br>
See [Posting an Issue](#posting-an-issue) for guidelines to follow when posting an issue.

If you don't get an answer within 1-2 days, feel free to post another comment in the issue thread as a reminder.


## Posting an Issue

1. Do a search in the issue tracker to ensure the same issue has not been posted before. <br>
   **IMPORTANT**: If reporting a security vulnerability, send your bug report directly to the contact email of 
   the project instead of posting it in the issue tracker.
1. Follow the [naming convention](FormatsAndConventions.md#issue) for the issue title. 


## Submitting a PR

### Before you start

* Note that a project might specify variations to the instructions given in this document.
  For example, a project might specify additional _orientation activities_ to do before submitting a PR. 
  Follow the instructions in this document in conjunction with those variations. 
* Note that by submitting a PR, you agree to allow the project owner to license your work under the same 
  license as that used by the project.
* Set up the project. These are the typical steps:
   1. Fork the repo to your GitHub account. 
   1. Clone the code to your computer.
   1. Follow the relevant sections of the _Developer Guide_ provided by the project to set up the project 
      in your computer. 
   1. Ensure the setup is correct by getting all the tests to pass.

### PR workflow

1. #### Select an issue to fix
   
   * Select an open issue from the issue tracker that you are interested to work on.
   
     > **Notes for first time contributors**:
     > 
     > * First time contributors should start with an issue labelled `d.FirstTimers`, if any. 
     > * You should not do more than one `d.FirstTimers` issues.<br>
     > * You should wait till the first PR is merged before starting on more PRs. 
     >   After you have one merged PR, you can work on multiple PRs in parallel.
     >   This restriction aims to save you from making the same mistake in multiple PRs.
     
   * If the issue list does not contain what you want to work on, post an issue first (as described [above](#posting-an-issue))
     and wait for it to be acknowledged. Otherwise you could end up fixing something that does not need fixing.
   * It is not required to (but OK to) ask for permission to work on an issue. 
     But do check the issue discussion thread to see if there are _active_ PRs for that issue. 
     If someone is already working on that issue, perhaps your efforts are better spent on a different issue.<br>
     However, it is acceptable to submit PRs containing alternative solutions even if there are active PRs for an issue.
   * If it seems the existing PRs for that issue are no longer active (e.g. no activity in the past seven days), 
     you can always post a message to check if anybody is still working on that issue.

1. #### Create a new branch

   Create a branch off the `master` branch. 
   Follow [our naming conventions for branch names](FormatsAndConventions.md#branch).
   
   > WARNING: Make sure you branch off `master` rather than the currently active branch.
   > Otherwise, you may get commits from other branches inside your PR.
   
1. #### Fix the issue in the new branch
   
   - [x] Adhere to coding style and testing requirements of the project.
   - [x] Limit the changes to the scope of the issue you are fixing. Do not fix multiple issues in the same PR. 
     Resist the urge to do unrelated 'minor cleanups' in the same PR. If you notice such potential clean ups, 
     create an issue for it (those can be a good source of `d.FirstTimers` issues).
   
     > Rationale: We should be able to undo any fix by reverting a single commit. Fixing multiple issues in the same
     > PR gets in the way of that ability.
     
   - [x] In addition to updating functional code, update relevant code comments, tests, user docs, and developer docs.
   - [x] Ensure that the tests are passing in your local environment. 
   - [x] Sync your fork with upstream changes 
   
     > More info: [How to Guides :: Sync a fork with upstream changes](HowToGuides.md#sync-a-fork-with-upstream-changes).
   
   Following these tips will help you in subsequent steps of the workflow: 
   
   * Commit often. 
   
     > Rationale: The smaller the size of each commit, the easier it is to reorganize them later to form a 
     > more meaningful commit sequence.
     
   * Keep the PR branch free of merge commits (i.e. `rebase` instead of `merge` when syncing with upstream repo). 
        
     > Rationale: Merge commits in a branch make it harder to reorganize commits in the branch later. 
        
   * Avoid pushing to a shared repo during this stage (but you can push to your own fork).
   
     > Rationale: We expect the commits to be edited at a later stage. 
     > It is not recommended to edit commits that may have already propagated to repos of other devs.
   
   * If the project uses any other static analysis tools (e.g. checkstyle), use them to detect any potential problems
     in the new code.
     
1. #### Prepare the commits for publishing

   * Go through the commit diffs and revert any changes unrelated to the PR. e.g. auto-updates done by the IDE. 
   * Refactor the commits to meet [our requirements for commit organization](FormatsAndConventions.md#commit-organization).
   
     > More info: [How to Guides :: Refactor Commits](HowToGuides.md#refactor-commits)

1. #### Create a PR
      
   1. Push the branch to your fork.
   1. Create a PR.
     - [x] Follow the [naming conventions for PRs](FormatsAndConventions.md#pr).
     - [x] Include `Fixes #IssueNumber` (e.g. `Fixes #1234`) in the PR description so that GitHub can auto-link the 
       relevant issue and 
       [auto-close the issue when the PR is merged](https://help.github.com/articles/closing-issues-via-commit-messages/).
       You can look at [this PR](https://github.com/se-edu/addressbook-level4/pull/237) for an example.

   > You may create a PR even before you are done with the fix, if you want to seek some early feedback from 
   > the dev team.
      
1. #### Request a review

   1. Wait for CI (i.e. Travis, AppVeyor) to run tests/checks against your PR and report status. 
      If any errors are reported, fix those problems and push the fixes to the same branch.
   
   1. Post a summary of commits using the 
      [CanIHasReview tool](https://github.com/pyokagan/canihasreview/).
    
      <details>
      <summary>How to use CanIHasReview</summary>
      
      1. Navigate to your PR. e.g. `https://github.com/se-edu/addressbook-level4/pull/237`.
      1. Replace `github.com` in the PR URL with `canihasreview.herokuapp.com`. The resulting URL should be 
         something like `https://canihasreview.herokuapp.com/se-edu/addressbook-level4/pull/237`.
      1. Click `Submit new iteration` button. It will post a summary of the PR similar to 
         [this example](https://github.com/se-edu/addressbook-level4/pull/209#issuecomment-270905049).
      
      </details>
    
   * If you do not get any response from the dev team within 1-2 days, keep posting reminders in the PR thread.

1. #### Revise the PR as per reviewer comments

    1. Wait until all assigned reviewers have signified that they have finished reviewing the PR (e.g. by applying the 
       `s.Ongoing` label). If you are not sure, post a comment requesting a confirmation.
    
       > Rationale: Updating the PR while a review is in progress can confuse reviewers.
       
    1. Update the commits as suggested by the reviewers.
    
       * Updates to existing logical changes should be done by modifying their corresponding commits.
       
         > More info: [How to Guides :: Refactor Commits](HowToGuides.md#refactor-commits)
       
       * New logical changes should be introduced as new commits.
       
       * Sometimes, reviewers may recommend 
         [splitting existing commits](http://sethrobertson.github.io/GitPostProduction/gpp.html#post-production) 
         in order to make them more cohesive.
       
       * Commit messages should be updated with new findings from review discussions. 
         For example, if the reviewer mentioned a possible new approach that was subsequently rejected 
         due to a non-obvious reason, then the commit should be updated with this information.<br>   
    
    1. Sync your fork with upstream repo.
    
       * Rebase your branch instead of merging `master` branch to your branch.   
       
    1. Update the branch in your fork. 
    1. Use the same CanIHasReview tool used earlier to post a new commit summary and alert the reviewers.

1. #### Refine the fix iteratively

   Repeat the review-refine cycle (explained above) until the PR is merged (usually done by a senior member of 
   the project team).

### After the first PR is merged

  * After you have managed to get one PR merged, you can gradually move to harder issues, 
    starting with issues labelled `d.Contributors`. 
  * As harder issues take longer to finish, it is prudent to post a message in the issue to let others know that 
    you are working on an issue.

