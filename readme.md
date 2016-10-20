# Pantheon Skeleton [![Build Status](https://travis-ci.org/kopepasah/pantheon-skeleton.svg?branch=master)](https://travis-ci.org/kopepasah/pantheon-skeleton)

This is a WordPress repo configured to develop locally using [VVV][1] and deploy those changes to your site hosted on the [Pantheon platform][3].

__Why use this repo in lieu of the Pantheon repo?__
* Currently [Pantheon][3] does not support [Git Submodules][4] for plugins or themes.
* The flow for pushing changes to dev/test/live do not follow a sustainable model due to all three sharing the master branch.

## Installation

:exclamation: Installation assumes you are already up and running with [VVV][1]. If not already up and running with [VVV][1], you should start [here][2] and come back later.

0. Clone this repo recursively (`git clone --recursive`) into the `www` directory of [VVV][1].
0. Run `vagrant reload --provision` (or `vagrant up --provision` if the Vagrant is not currently running).
0. Visit [pantheonskeleton.local](http://pantheonskeleton.local) in your browser.

## Workflow

Workflow for development follows the [Github Flow][5], with any new features branching off of `master`. Once a feature is ready for review, a pull request is created for branches `develop` and `master`. See _Workflow Example_ section in [contributing.md](contributing.md) for more information.

Workflow for content (database) and deploys (code) follow the [Pantheon Flow][6].

[1]: https://github.com/Varying-Vagrant-Vagrants/VVV
[2]: https://github.com/Varying-Vagrant-Vagrants/VVV#the-first-vagrant-up
[3]: https://www.getpantheon.com
[4]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[5]: https://guides.github.com/introduction/flow/
[6]: https://pantheon.io/docs/pantheon-workflow/
