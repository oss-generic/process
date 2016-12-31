# Managing Releases

* **Who does it?** Releases can be managed by the _Release Lead_ of the project (if there is one) or the project lead.

* **How often?** Weekly time-boxed release cycles are encouraged. Note that projects that has no end-user facing 
  product may not have releases.

* **What to include in a release?** Planning a release in advance is not practical because our code contributions
  are intermittent and the available manpower for a given release cycle is not always predictable. 
  Instead, the release contains whatever new code that has been added since the previous release. 
  However, major releases which are not backward compatible may need planning in advance.

* **Maintaining project velocity**: 
  It is important to keep resolving issues at regular intervals if the project were to keep moving 
  forward at a reasonable pace. Here are some things we can do: 
  * Shorten the lifecycle of ongoing PRs by aggressively reminding dev/reviewers to resume work when the PR progress 
    becomes stagnant. 
    * Project lead needs to periodically check the issue tracker for inactive PRs and remind the relevant 
      persons to resume work.
    * If a PR is inactive even after a reminder, it can be closed (and the issue unassigned). 
    * TODO: automate the reminders.
  * Make issues smaller so that each can be resolved in a shorter time.
  * Actively seek volunteers to do higher priority issues.

## Configuration management for releases

* Usually, a milestone is tied to a release. Use GitHub 'Milestones' and 'Releases' features to manage a release. 
  In most cases, milestone name can be the version number of the release.

* `master` branch should represent the latest version that is releasable. 
  Normally, PRs are made against the `master` branch. 
  If a new feature requires multiple PRs to merge before it is releasable, it should be developed in a 
  _long-lived feature branch_ first and merged to `master` only when it is releasable.

* A release is signified by merging `master` into the `release` branch and tagging the commit with the version number. 
  If the release is made using GitHub's Release feature, it will create the tag automatically.
  
* Release numbering must try to follow [Semantic Versioning](http://semver.org/) guidelines as far as possible.
  Format `v{major}.{minor}.{patch}` e.g. `v5.1.2`.
  
* If a critical patch needs to be released as a hot fix (between regular releases), the patch is applied on the 
  release branch first (i.e. the PR should be against the `release` branch). After the patch is released, 
  the `release` branch is merged back to `master`.

## Making a release

Release day - 3: 
  
* [Optional] Post a comment on ongoing PRs of the current milestone to remind the dev/reviewer to 
  finish by the release date.

Release day:

1. Ensure the target commit on `master` is not broken.
1. Merge to `release` branch. 
1. Create a release.
1. If PM (Project Manager) needs to do extra steps to 'deploy' the new version, 
   create an issue on issue tracker and assign to PM.
1. Ensure all issues and PRs included in the release are tagged with the 
   correct milestone and the correct assignees.
1. Extend the milestone of issues that slipped the current milestone and post
   a comment asking to finish by next milestone. If an issue is not making
   progress, close the PR and un-assign the issue.
1. If applicable, add/revise `e.` labels for the issues/PRs in the release. 
   This may be required for contributors who are working in the project for module credit.
   If the you are not sure of the effort, post a comment for the reviewer to add the labels.
1. Ensure all branches merged in the milestone have been deleted on GitHub.
1. Update (or create an issue for updating) contributor list in the project website.
1. Announce the release on relevant channels (e.g. slack, issue tracker).
1. Close the current milestone and create a new milestone for the next release. 
1. Ensure all pending `p.Urgent` issues are assigned and scheduled for next milestone.
   Try to find volunteers for any `p.High` issues. You can require project lead's assistance for this task.
  
