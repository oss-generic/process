# How To ...

### Create a multi-step PR

> Ask a programmer to review 10 lines of code, he'll find 10 issues. Ask him to do 500 lines and he'll say it 
> looks good. _[[source](https://twitter.com/girayozil/status/306836785739210752)]_

Big PRs (i.e. PRs touching more than 100 lines) are hard to review. Using the _multi-step PR_ format allows the 
review to be done incrementally.

A multi-step PR consists a series of commits corresponding to a sequence of logical steps, 
each step advancing the code base towards the end goal of the PR. The build must pass at each step. 

                     
> Build-breaking commits in the version history hinder the ability to use `git bisect` for locating bugs.

[Here](https://github.com/se-edu/addressbook-level4/pull/237) is an example of a PR that is in multi-step format.
The workflow of a multi-step PR is given below.

1. Dev creates the PR branch in multi-step format.
   
   <details>
   <summary>A typical workflow to achieve a multi-step commit sequence (yours may differ)</summary>
   
    
   * Plan the PR as a sequence of logical steps.
   * Implement each step, committing each step as a separate commit. Note that you might have to deviate from the 
     original plan along the way, which is fine; continue to commit after each significant change.
   * After the fix is complete, refactor the commits (i.e. reorder, squash, split, etc.) to achieve  
     a commit sequence that reflects the logical steps of the fix you should have taken in retrospect.<br>
     Remember to write [detailed commit messages](FormatsAndConventions.md#commit-message) for each commit.
   </details>

   
1. When the PR is ready for review, dev posts a summary of commits using the 
   [CanIHasReview tool](https://github.com/pyokagan/canihasreview/).
    
    <details>
    <summary>How to use CanIHasReview</summary>
    
    1. Navigate to your PR. e.g. `https://github.com/se-edu/addressbook-level4/pull/237`.
    1. Replace github.com in the PR URL with `canihasreview.herokuapp.com`. The resulting URL should be 
       something like `https://canihasreview.herokuapp.com/se-edu/addressbook-level4/pull/237`.
    1. Click `Submit new iteration` button. It will post a summary of the PR similar to 
       [this example](https://github.com/se-edu/addressbook-level4/pull/209#issuecomment-270905049)
    
    </details>
       
1. The reviewer reviews the PR in an incremental fashion.

    <details>
    <summary>Insructions for the reviewer</summary>
    
    1. Review one commit at a time, starting with the earliest commit. 
       [Here](https://github.com/se-edu/addressbook-level4/pull/209#pullrequestreview-15603608) is an example.
    1. If the early commits require lot of changes, there's no need to review later commits until the early commits 
       are updated as per review.
    
    </details>
      
1. After reach round of review, the dev _updates the existing commits_  (rather than add more commits)
   according to the review comments. 
   
   <details>
   <summary>A typical workflow for updating the PR in response to a review</summary>
   
   * Commit changes in separate commits.
   * Squash the new commits onto the relevant commits in the PR. New commits can remain if they introduce new
     logical changes that were not in the previous version, or if the reviewer recommended splitting existing commits.
   
   </details>
   
1. Dev posts the summary of the new version using the same CanIHasReview tool used earlier. The reviewer is informed
   of the new version automatically.

### Hide white space changes from being shown in the GitHub diff 
  
Append `?w=1` to url of the `/files` page of the pull request (the "Files changed" tab)

### Remove unwanted modifications from a branch

// TODO

### Refactor commits

// TODO Reordering, squashing, editing commit message

### Update a PR with upstream changes

1. Update the `master` branch of your local clone. 
[Here](https://help.github.com/articles/syncing-a-fork/) are the instructions.

1. Push your `master` branch to your fork (if you are creating PRs using a fork).

1. Sync your branch with the `master` branch. This can be done in two ways:
   1. Merge `master` to your branch (recommended option for new contributors).
   1. Rebase the PR branch on the `master` branch (recommended option for experienced contributors). 

### Implement big features using long-lived feature branches

// TODO