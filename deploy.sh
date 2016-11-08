#!/usr/bin/env bash

set e

cd $TRAVIS_BUILD_DIR

# --- Safety checks
# If a Pantheon site is not set, bail.
if [ -z "$PANTHEON_SITE" ]; then
	echo "Skipping deploy because no Pantheon site is set."
	exit 0
fi

# If this is a check on a pull request, bail.
if [ $TRAVIS_PULL_REQUEST != "false" ]; then
	echo "Skipping deploy because this is a pull request."
	exit 0
fi

# If this check is not on master or develop branch, bail.
if [ $TRAVIS_BRANCH != "master" && $TRAVIS_BRANCH != "develop" ]; then
	echo "Skipping because you are on ${TRAVIS_BRANCH}."
	echo "Deploys only happen on master and develop branches."
	exit 0
fi

# Set info of last commit.
NAME=$(git log -1 --pretty=%an)
EMAIL=$(git log -1 --pretty=%ae)
MESSAGE=$(git log -1 --pretty=%B)

# --- Deploy
git clone --depth=20 --branch=$TRAVIS_BRANCH $PANTHEON_SITE pantheon
grunt pantheon:deploy
cd $TRAVIS_BUILD_DIR/pantheon

# Set status of Pantheon repo.
STATUS=$(git status --porcelain)

# If there are no changes, bail... otherwise add, commit and push.
if [ -z "$STATUS" ]; then
	echo "Skipping because there are no changes to deploy to the site."
	exit 0
else
	git config user.name $NAME
	git config user.email $EMAIL
	git config push.default simple

	git add -A
	git commit -m "${MESSAGE}"
	git push
fi
