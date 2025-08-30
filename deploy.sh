#!/bin/bash

echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the project
echo "🏗️ Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build output is in the 'dist' directory"
    echo ""
    echo "🚀 Ready for deployment!"
    echo ""
    echo "For Vercel deployment:"
    echo "1. Install Vercel CLI: npm i -g vercel"
    echo "2. Deploy: vercel"
    echo "3. Production: vercel --prod"
    echo ""
    echo "For manual deployment:"
    echo "Upload the 'dist' folder to your hosting provider"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
