#!/bin/bash
# Rebuild site
hugo

# Push to gh-pages
cd public
git add -A .
git commit --message "Generated site on $(date)"
git push origin master
cd ..
