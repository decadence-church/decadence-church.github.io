#!/bin/bash

git update-ref -d HEAD
git add .
git commit -m "Publish"
git push -f
