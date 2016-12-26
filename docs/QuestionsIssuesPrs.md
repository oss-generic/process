# Workflow for submitting Questions, Issues and PRs

* [Asking a Question](#asking-a-question)
* [Posting an Issue](#posting-an-issue)
* [Submitting a PR](#submitting-a-pr)

## Asking a Question

Post your question in the issue tracker.<br>
See [Posting an Issue](#posting-an-issue) for guidelines to follow when posting an issue.

If you don't get an answer within 1-2 days, feel free to post another comment in the issue thread as a reminder.


## Posting an Issue

1. Do a search in the issue tracker to ensure the same issue has not been posted before.
2. Follow the [naming convention](FormatsAndConventions.md#issue) for the issue title. 


## Submitting a PR

> This is an adaptation of the [_GitHub Flow_](https://guides.github.com/introduction/flow/). 

Note that each project might specify additional things to do. i.e. follow these steps in conjunction with 
additional details provided by the specific project.

1. Read any instructions the project has for new contributors. Some projects require you to read some documents
   and/or do some orientation activities before you start contributing. 
   For example, [TEAMMATES](../../../teammates/teammates) has a 'Contributor Orientation Guide'.

2. Set up the project. These are the typical steps.
   1. Fork the repo to your GitHub account. 
   2. Clone the code to your computer.
   3. Follow the 'Set up guide' provided by the project to set up the project in your computer. 
   4. Ensure the set up correct by getting all the tests to pass.

3. Select an open issue from the issue tracker that you want to work on. 
   
   > If the issue list does not contain what you want to work on, post an issue (as described [above](#posting-an-issue))
   > and wait for it to get acknowledged. Otherwise you could end of fixing something that does not need fixing.

4. You are recommended to start with an issue specifically marked for first time contributors (i.e. issues with the 
   `d.firstTimers` label). Note that you **should not do more than one `d.firstTimers` label**.
   
   * It is not required to (but OK to) ask for permission to work on an issue. 
   But do check the issue discussion thread to see if there are _active_ PRs for that issue. 
   If someone is already working on that issue, perhaps your efforts are better spent on a different issue.
   * If it seems the existing PRs for that issue are no longer active (e.g. no activity in the past seven days), 
   you can always post a message to check if anybody is still working on that issue.

5. Create a branch with the name that follows the [naming conventions for branch names](FormatsAndConventions.md#branch).

6. Fix the issue in the new branch. 
   * Remember to adhere to coding style and testing requirements of the project, as specified in the project 
     documentation.
   * A PR should bring the code from one complete state to another. That means when you update code, relevant
     code comments, tests, user docs, and developer docs should be updated too.
   * Commit code at suitable points. Follow the [conventions for commit messages](FormatsAndConventions.md#commit).

7. When you think you are done with fix, create a new PR. Here are the steps: 
   1. **Update a PR with upstream changes**: There is a chance that While you were write code for the PR, 
      the master branch of the _upstream repo_ (i.e. the original repo you forked from) has been updated with new code. 
      In that case you need to update your fork and your clone with that new code so that the only difference between 
      the code in your branch and the upstream master branch is the code you wrote.  <br>
      
      > See: [How to update a PR with upstream changes](HowToGuides.md#update-a-pr-with-upstream-changes)
   
   2. **Get _local green_**: 
      
      * Ensure that the tests are passing in your local environment. 
      * If the project uses any other static analysis tools (e.g. checkstyle), use them to detect any potential problems
        in the new code.
   1. **Push the code of your branch to your fork**.
   2. **Create a PR**: 
      
      * Follow the [naming conventions for PRs](FormatsAndConventions.md#pr).
      * Include `Fixes #IssueNumber` (e.g. `Fixes #1234`) in the PR description so that GitHub can auto-link the 
      relevant issue and 
      [auto-close the issue when the PR is merged](https://help.github.com/articles/closing-issues-via-commit-messages/).
      You can look at [this PR](https://github.com/TEAMMATES/teammates/pull/6200) for an example.
      * Before submitting the PR, go through the diff (i.e. the modifications included in your PR) shown by GitHub
        to ensure that it does not contain any changes that are not relevant to the PR. If there are any, 
        you need to update your branch to remove those changes.
   
     > You may create a PR even before you are done with the fix, if you want to seek some early feedback from 
     > the dev team.

8. After creating the PR, 
   1. Wait for CI (i.e. Travis, AppVeyor) to run tests/checks against your PR and report status. 
      If any errors are reported, fix those problems and push the fixes to the same branch.
   2. When there are no more CI errors, post a comment to inform the dev team that the PR is ready for review. 

9. If you do not get any response from the dev team within 1-2 days, keep posting reminders in the PR thread.

10. After you receive a review, 
    1. Update the code as suggested by the reviewer.
    2. Sync your fork with upstream repo.
    3. Push the new commits to the same branch in your fork. GitHub will update the PR with your new code automatically. 
    4. When the code is ready for review again, post a comment in the PR thread to let the reviewer know.
   
11. **Submitting subsequent PRs**:

  * After you have managed to successfully merge one PR, you can gradually move to harder issues. e.g. issues marked
    with the `d.Contributors` label.
  * As harder issues take longer to finish, it is prudent to post a message in the issue to let others know that you are 
    working on an issue.
  * As you submit more (and bigger)PRs, incrementally adopt 
    [additional guidelines meant for experienced contributors](AddionalContributorGuidelines.md).