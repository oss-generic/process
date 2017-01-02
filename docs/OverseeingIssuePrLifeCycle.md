# Overseeing Issue/PR Life Cycle

## Triaging Issues

Issue tracker doubles as the message board. Therefore, it can have two types of issues:
* _Change Requests_: Regular issues requiring changes to the software. e.g. bug reports, feature requests
* _Misc. Posts_: i.e. all other issues announcements, questions, support requests from contributors, self-intros etc. 
 
When an issue comes in, 

* any one can respond to it. Faster responses are an indicator of project health.
* any one with sufficient privileges can add labels based on the [project's definition of each label](DefiningLabels.md).
  * However, Project Manager (PM) should be the one applying the priority (i.e. `p.`) label 
    for change requests (_misc. posts_ do not need priority labels). This is to ensure that all issues get
    prioritized using a uniform scale.

# Assigning reviewers for PRs

* A PR should have,
  * **1 or more `reviewers`** (See [Reviewing PRs](ReviewingPrs.md) for more info)
  * **all reviewers should be selected as `assignees`**
  
  > Duplicating `reviewers` as `assignees` is needed because GitHub filter syntax cannot filter by reviewers yet.
  
* PRs created by core members:
  * If you can, assign at least one `reviewer`. If you don't, team lead will assign reviewers for the PR.
  
  > To find suitable reviewers, you can use GitHub's _blame_ feature. 
  > **Currently active** Developers who have touched the same code before are potential reviewers.
  
* PRs created by non-core members:
  * Team lead should assign reviewers based on the member's expertise area. 
  * Core members can volunteer as reviewers by assigning self as a `reviewer` (and `assignee`).

* After a PR has been approved by all reviewers, the last reviewer to approve should request a 
  review from the PM.
  
* After the PM has approved the PR, it can be merged. See [Merging PRs](MergingPrs.md).
 
