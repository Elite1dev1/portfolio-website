#!/bin/bash

# Install dependencies
npm install

# Build Next.js app
npm run build

# Create a build directory for Render
mkdir -p build
cp -r .next build/
cp -r public build/
cp package.json build/
cp next.config.js build/ 2>/dev/null || :
