#!/bin/bash

if [ ! -z "$BITBUCKET_BRANCH" ]; then
  CURRENT_BRANCH="$BITBUCKET_BRANCH"
  echo "Loaded branch from BITBUCKET_BRANCH env: $CURRENT_BRANCH..."
elif [ ! -z "$BUILD_SOURCEBRANCHNAME" ]; then
  CURRENT_BRANCH="$BUILD_SOURCEBRANCHNAME"
  echo "Loaded branch from BUILD_SOURCEBRANCHNAME env: $CURRENT_BRANCH..."
elif ([[ "$OSTYPE" == "darwin"* ]] || [[ "$OSTYPE" == "win32" ]] || [[ "$OSTYPE" == "msys" ]]); then
  CURRENT_BRANCH="develop"
  echo "Running on local env assuming $CURRENT_BRANCH..."
else
  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  echo "Running on unknown env assuming current branch $CURRENT_BRANCH..."
fi

case $CURRENT_BRANCH in
  "develop")
    export ENV="develop"
    export FRONTEND_DOMAIN="localhost:3000/"
    export RECAPTCHA_PUBLIC_KEY="6LePab8UAAAAAH1cv3npows3brE52KFh0Y7iTPx8"
    ;;
  *)
    echo "Unknown branch for deployment $CURRENT_BRANCH"
    exit 1
    ;;
esac

echo "[ENV]"
echo "Environment: ${ENV}"
echo "Branch: ${CURRENT_BRANCH}"
echo "Frontend Domain: ${FRONTEND_DOMAIN}"