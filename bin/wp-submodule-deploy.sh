#!/bin/bash

# TODO: Create sanity checks for where this script is run, which branch we are on and if changes even need to be committed.

# Change directory into the submodule, checkout master, add and commit changes
# then push to the main site repo on Pantheon.
cd wp
git checkout master
git add --all
git commit --no-status -m "Automated deploy of changes from parent repo."
git push

# Change directory into the parent module, checkout master, add and commit changes.
cd ..
git master
git add wp
git commit --no-status -m "Automated update of 'wp' submodule."
