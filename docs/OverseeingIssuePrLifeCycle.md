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

* A PR should have **1 or more `reviewers`** (See [Reviewing PRs](ReviewingPrs.md) for more info)<br>
  The `assignees` field can be left empty.
  
* PRs created by core members:
  * Author may request reviews from at least one core member. Else, team lead will assign reviewers for the PR.
  
    > GitHub's _blame_ feature (or a third-party service such as _mentionbot_) can help to find suitable reviewers. 
    > **Currently active** Developers who have touched the same code before and leads of the areas touched by the PR 
    > are potential reviewers.
  
* PRs created by non-core members:
  * Team lead should request reviews based on the members' expertise areas. 
  * Core members can volunteer as reviewers by requesting a review from self.

* After a PR has been approved by all reviewers, the last reviewer to approve should request a 
  review from the PM.
  
* After the PM has approved the PR, it can be merged. See [Merging PRs](MergingPrs.md).
 
