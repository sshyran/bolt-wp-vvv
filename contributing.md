# Contributing

## Workflow Example

Building off of the short intro in [readme.md](readme.md), here is a step by step overview for a creating new feature (named `awesomeness`):

0. Create branch `feature/awesomeness` off reference `master`.
0. Switch to branch `feature/awesomeness` and add your awesomeness.
0. When ready for review, create pull requests from `feature/awesomeness` to both `develop` and `master` branches.
0. Assign pull request to alternate developer(s).
0. Developer reviews code off branch `feature/awesomeness` and makes comments as necessary. If approved, developer assigns pull request to `develop` to Deployer with the green light to deploy.
0. Deployer merges pull request into branch `develop` and deploys changes to the Pantheon `develop` branch for quality assurance testing and assigns the pull request to `master` to the appropriate Representative.
0. Representative reviews the awesomeness and makes comments as necessary. If approved, Representative assigns pull request to `master` back to Deployer with the green light to deploy.
0. Deployer merges pull request into branch `master` and deploys changes to the Pantheon `master` branch for final staging.
0. Once all features/hotfixes are merged into `master` for this cycle, Deployer deploys code changes from Pantheon `dev` environment to `test` environment and pulls content from `live` environment to `test` environment for final testing.
0. Deployer notifies appropriate Testers (developers, marketing, quality assurance representatives, et cetera) to perform a quick and final review for the green light to production.
0. Once a green light is given from Testers, Deployer deploys code from Pantheon `test` environment to `live` environment.
