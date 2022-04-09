#! /bin/bash

# clean repository
echo "Cleaning publis folder...\n"
rm -rf ~/public_html/assets ~/public_html/blog ~/public_html/*.xml ~/public_html/*.webmanifest ~/public_html/*.html
echo "Cleaned successfuly\n"

# unzip release
echo "unziping release...\n"
unzip ldw.solutions.*.zip
echo "success"

# move files
echo "moving release files...\n"
cp -R dist/* ~/public_html
rm -rf dist
echo "dist folder copied successfuly\n"

# Add version file
echo "Creating file version...\n"
rm ~/public_html/version*.txt
touch ~/public_html/version$(ls ldw.solutions.*.zip | tr -s . - | tr -d ldw | tr -d solutions | tr -d zp | tr -s \- .)txt
echo "File version created successfuly"
rm -rf __MACOSX