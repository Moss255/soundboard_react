#!/bin/bash
npm run build
cd ./build
git add .
git commit -m "Updates"
git push -u origin gh-pages
cd ..