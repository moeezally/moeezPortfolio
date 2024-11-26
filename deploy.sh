#!/bin/bash

# Navigate to the build directory
cd build || exit

# Add remote repository
git remote add origin https://github.com/moeezally/moeezally.github.io.git

# Stage all changes
git add .

# Commit changes
git commit -m "Changes Deployed"

# Push changes to main branch with force
git push -f origin main

# Navigate back to the project root
cd ..
