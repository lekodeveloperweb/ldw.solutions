#! bin/bash

echo "Remove old release..."
echo ""
rm -rf ldw.solutions.*.zip
echo "Old release removed successfuly"
echo ""
echo "Creating new release..."
echo ""
zip -r ldw.solutions.$(npm pkg get version | tr -d \").zip dist/
echo "New release created successfuly"