# Defining Labels

Unless mentioned otherwise, **labels are applied to issues only** (not PRs). 

## Label groups

While GitHub does not have the concept of label groups, we can simulate label groups using systematic label naming. 
i.e. labels having the same prefix are considered part of a label group.

There are two types of label groups: 
 
* Exclusive groups: No more than one label from the group can be applied to an issue
* Non-exclusive groups:  Multiple labels from a group can be applied to an issue

**Common label groups**:

* exclusive: `s.` status, `p.` priority, `c.` category, `d.` difficulty, `e.` effort, 
* non-exclusive:  `a-` aspect, `f-` feature, `t-` tech, 
 
# Common Labels

### Priority (`p.`)

* `p.Critical`: Would like to fix it ASAP and release as a hot patch.
* `p.Urgent`: Would like to handle in the very next release.
* `p.High`: Enhances user experience significantly, would like to do in the next few releases.
* `p.Medium`: Marginal impact on user experience.
* `p.Low`: Very little impact, unlikely to do in the near future.
* `p.Zero`: Unlikely to do, ever.

> An issue is considered as _accepted_ when a priority label has been assigned.

### Status (`s.`)

* Open issues
    * No status: New issue yet to be triaged. 
    * `s.OnHold`: The work on the issue has been put on hold pending some other event.
* Open PR  
    * `s.ToReview`: Waiting for the review.
    * `s.Ongoing`: The PR is being worked on.
    * `s.ToMerge`: Main reviewer approved the changes. 
    * `s.MergeApproved`: Both main reviewer and the code quality reviewer has approved the merge. PR can be merged.
    * `s.OnHold`: The work on the PR has been put on hold pending some other event.

### Category (`c.`)

* Changes to _functionality_, categorized based on size
  * `c.Enhancement`: An enhancement to an existing functionality (not big enough 
   to be considered as a user story).
  * `c.Story`: A user story.
  * `c.Epic`: A feature that is worth many user stories.
* Other work
  * `c.Bug`
  * `c.Task`: Other work items such as updating documentation.
  * `c.Message`: Issue used as a means of discussing something with the dev team.
     e.g. a request for help on setting up dev environment.

### Difficulty (`d.`)

* `d.FirstTimers`: For new contributors to do as their first PR. MUST be simple enough to be contained in one commit. 
  One developer should not do more than one of these. Not to be applied for issues with a priority `p.high` or above.
* `d.Contributors`: Moderate difficulty. Small localized change. Can be done by contributors.
  Not to be applied for issues with a priority `p.high` or above.
* `d.Committers`: More difficult issues that are better left for committers or more senior developers.

### Effort (`e.`)

This label is used to indicate how much effort is expected for (or was spent on)
an issue.

`e.1` is roughly equal to an hour of work, `e.2` is two hours of work, and so on.
Recommended values: 1,2,4,8,16,32

Effort labels applied to PRs indicate effort for reviewing (by the main reviewer). Those applied for issues indicate
the effort for fixing the issue.

### Aspect (`a-`)

Classifies the issues based on the non-functional aspect it tackles. Some examples:

|Label              | Description
|-------------------|------------------------------------
|`a-AccessControl`  |Controlling access to user groups, authentication, privacy, anonymity
|`a-CodeQuality`    |Refactorings that are mainly to improve code/design quality
|`a-Concurrency`    |Things related to concurrent access, session control
|`a-DevOps`         |CI, release management, version control, dev docs
|`a-Docs`           |User docs, product website
|`a-FaultTolerance` |Resilience to user errors, environmental problems
|`a-Performance`    |Speed of operation
|`a-Persistence`    |Saving data permanently
|`a-Scalability`    |Related to behavior at increasing loads
|`a-Security`       |Protection from security threats
|`a-Testing`        |Testing efficiency and robustness (as opposed to testing a specific feature)
|`a-UIX`            |User interface, User experience, Responsiveness

### Feature (`f-`)

Classifies the issue based on the feature it involves. These labels depend on the project.
e.g. `f-Admin`, `f-Sessions`


### Tech (`t-`)

Classifies the issue based on the tool/technology it involves. Some examples given below.

|Label     | Description                                
|----------|---------------------------------
|`t-CSS`   |CSS, Bootstrap
|`t-HTML`  |HTML, Browsers
|`t-JS`    |Javascript, JQuery
|`t-JSTL`  |JSTL, JSP, Servlets


## Guidelines for defining labels

* Choose bright colors for labels that should get more attention. [Here][labels] are some sample 
  labels with suitable colors.
* Use UpperCamelCase for label names. 
* Keep group prefixes short and use lower case.

[labels]:https://github.com/oss-generic/process/labels?sort=name-asc