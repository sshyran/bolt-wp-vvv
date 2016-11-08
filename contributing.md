# Contributing

:exclamation: All features and hotfixes should branch off `master`.

## Workflow

Building off of the short intro in readme.md, here is a step by step overview for creating a new feature:

0. Create branch `feature/<branch-name>` off reference master.
0. Switch to branch `feature/<branch-name>` and add your changes.
0. When ready for review, create a pull request from `feature/<branch-name>` → `develop` branch.
0. Assign Github Pull Request to Reviewer.
0. Reviewer reviews code off branch `feature/<branch-name>` and makes comments as necessary. If approved, Reviewer approves pull request and merges `feature/<branch-name>` into `develop`. Changes will auto deploy to Pantheon _develop_ environment.
0. Reviewer assigns Jira ticket to Quality Assurance Representative for final testing.
0. QA Representative tests the changes and makes comments as necessary. If approved, QA Representative creates `feature/<branch-name>` → `master` pull request and assigns Github Pull Request to Deployer with the green light to deploy.
0. Deployer merges pull request into branch `master` and code changes are auto deployed to Pantheon _dev_ environment.
0. Once all features/hotfixes are merged into `master` for this cycle/sprint, Deployer publishes code changes on `master` to Production.
