#!/bin/sh

# Only install git hooks if we are in the project's git root
# Do NOT install git hooks when ie. installing this package using npm directly from Github
if [ -d "utils/githooks" ]; then
  echo "Installing git hooks:"
  echo utils/githooks/*

  cp -r utils/githooks/* .git/hooks/
fi
