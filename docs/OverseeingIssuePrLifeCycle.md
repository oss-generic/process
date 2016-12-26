# Overseeing Issue/PR Life Cycle

## Triaging Issues

Our issue tracker doubles as the message board. Therefore, it can have two types of issues:
* Support Requests: (i.e. announcements, questions, support requests, self-intros etc.) 
* Change Requests: Issues requiring changes (i.e. all other issues).
 
When an issue comes in, 

* any one can respond to it. The faster we can respond to issues, the better it is.
* any one with sufficient privileges can add labels based on the [project's definition of each label](DefiningLabels.md).
  * However, Project Manager (PM) should be the one applying the priority (i.e. `p.`) label 
    for change requests (support requests do not need priority labels). This is to ensure that all issues get
    prioritized using a uniform scale.

# Assigning reviewers for PRs

* A PR should have,
  * **1 or more `reviewers`** (See [Reviewing PRs](ReviewingPrs.md) for more info)
  * **no more than one `assignee`** : The `assignee` field can be used to indicate the main reviewer when there are 
    multiple reviewers and it is not clear who is the main reviewer. Otherwise it can be left empty.
  
* PRs created by core members:
  * No need for an `assignee` (because the author can merge the PR). The `author` is assumed as the `assignee`.
  * If you can, assign at least one `reviewer`. If you don't, team lead will assign reviewers for the PR.
  
* PRs created by non-core members:
  * Team lead should assign reviewers based on the member's expertise area. 
  * Core members can volunteer as reviewers by assigning self as a reviewer.

* After a PR has been approved by all reviewers, `assignee` should apply the `s.ToMerge` label and request a 
  review from the PM.
  
* After the PM has approved the PR, it can be merged. See [Merging PRs](MergingPrs.md).
 
