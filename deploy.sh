#!/bin/sh
branch=$1

if [ "$branch" != "" ]; then
  git add . && git commit && git push origin $branch && cd studio && sanity deploy && cd ../
  echo "✅ Deployment to branch successful: $branch"
else
  git add . && git commit && git push origin master && cd studio && sanity deploy && cd ../
  echo "✅ Deployment to branch successful: master"
fi