#!/bin/sh

echo "Installing git hooks:"
echo utils/githooks/*

cp -r utils/githooks/* .git/hooks/
