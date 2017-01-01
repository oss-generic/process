# Merging a PR

**Who can merge?** 
A PR is to be merged by the author of the PR if the author has commit privileges. 
Else it should be merged by the main reviewer.
  
  > PRs that can be merged online without any further testing and post-merge clean up can be merged by the PM
  > immediately after PM's approval.

**When to merge?** 
Merging to `master` or `release` branches requires approval from the Project Manager (PM). 

* Merging can be done via GitHub. Make sure that GitHub gives the green light for merging.
  There are a few scenarios where GitHub can prevent merging from proceeding:
  * **Merge conflict**: The PR is conflicting with the current `master` branch; the author will
    need to resolve the conflicts before proceeding. 
  * **Check failure**: E.g. CI is failing.
  * **Outdated branch**: The PR is not in sync with the current `master` branch; the author will
    need to sync it before proceeding. This can be done via GitHub with the "Update branch" button.
    
  The dev will need to resolve them before merging can proceed. 
  Changes done while resolving the above should be reviewed too.

* If the project does not have CI set up to run all tests, 
  1. Checkout the branch PR to your Computer
  1. Run the tests and any other checks applicable (e.g. linters). 
     If any failed, use GitHub's Review feature to request changes. 

* Merging can be done on GitHub. 
  1. If the commit history is clean (this should be the case for PRs done by experienced contributors who follow 
     the [advanced contributor guidelines](docs/AdvancedContributorGuidelines.md)), <br>
     Merge using the 'Create a merge commit' option.
  2. Else, merge using the `squash and merge` option.
  
* Optionally, apply an `e.*` label to the issue (not the PR) to indicate 
  the estimated effort required to fix the issue, and another `e.*` label to the PR
  to indicate the estimated effort required to review the PR.
