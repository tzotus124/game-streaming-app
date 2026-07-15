#!/bin/bash

echo "🎮 Building Game Streaming Server..."
echo ""

echo "[1/3] Building TypeScript..."
cd server
npm run build
if [ $? -ne 0 ]; then
    echo "Error building TypeScript"
    exit 1
fi

echo "[2/3] Creating EXE file..."
npm install -g pkg
npx pkg dist/index.js --targets win --output GameStreamingServer.exe --compress Brotli

if [ $? -ne 0 ]; then
    echo "Error creating EXE"
    exit 1
fi

echo "[3/3] Complete!"
echo ""
echo "✅ Success! EXE created: GameStreamingServer.exe"
echo ""
