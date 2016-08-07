# Guidelines for New Contributors

## Asking a Question

If the project doesn't have a public mailing list or a chat channel, post your question in the issue tracker.<br>
See [Posting an Issue](#posting-an-issue) for guidelines to follow when posting an issue.

## Posting an Issue

1. Do a search in the issue tracker to ensure the same issue has not been posted before.
2. Craft a concise yet descriptive issue title. <br>
   For example, if it is a bug report, the issue title should sound like a bug report instead of a feature request.

## Submitting Your First PR

1. Select an open issue from the issue tracker that you want to work on. 
2. You are recommended to start with an issue specifically marked for new contributors. 
   e.g. issues with the `d.firstTimers` label 
   1. It is not required to ask for permission to work on an issue. 
   But do check the issue discussion thread to see if there are active PRs for that issue. 
   If someone is already working on that issue, perhaps your efforts are better spent on a different issue.
   2. If it seems the existing PRs for that issue are no longer active (e.g. no activity in the past few weeks), 
   you can always post a message to check if anybody is still working on that issue.
3. Fork the repo to your GitHub account. Clone the code to your computer.
4. Set up the project in your computer. Pull the latest code from the `master` branch.
5. Create a branch with the name as specified in the [Naming Conventions: branch name](#branch-name).
6. Fix the issue in the new branch.Remember to adhere to coding style and testing requirements of the project, 
   as specified in the project documentation.
7. When you think you are done with fix, 
   1. Push the code to your fork.
   2. Create a PR. 
   
   > You may create a PR even before you are done with the fix, if you want to seek some early feedback from the dev team.
8. After creating the PR, post a comment to inform the dev team that it is ready for review. <br>
   If you do not get any response from the dev team within 1-2 days, keep posting reminders in the PR thread.
   
## Submitting subsequent PRs

* After you have managed to successfully merge one PR, you can gradually move to harder issues. 
* As harder issues take longer to finish, it is prudent to post a message in the issue to let others know that you are 
  working on an issue.
* Try to adopt [Git best practices](#git-best-practice).

# Coding Standards

TBD

# Naming Conventions

##### Branch name

format: **`issueNumber-some-keywords-from-issue-title`**

e.g. if the issue title is `Error alert email has very long subject #5958`, <br>
your branch name can be `5958-error-alert-long-subject`

##### PR title

format: **`IssueTitle #IssueNumber`**

e.g. `Error alert email has very long subject #5958`

# Git Best Practices

TBD