# How To ...

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