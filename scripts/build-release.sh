#!/bin/bash

# Game Streaming App - Automated Build & Release Script
set -e

echo "================================"
echo "🎮 Game Streaming App - Builder"
echo "================================"
echo ""

VERSION="1.0.0"
RELEASE_DIR="releases"

mkdir -p "$RELEASE_DIR"

echo "[1/5] Building Server EXE..."
cd server
npm install --production
npm run build
npm install -g pkg
npx pkg dist/index.js --targets win --output GameStreamingServer.exe --compress Brotli
cp GameStreamingServer.exe "../$RELEASE_DIR/"
echo "✅ Server EXE created"
cd ..

echo ""
echo "[2/5] Building Host EXE..."
cd host
npm install
npm run dist
cp "dist/Game Streaming Host Setup.exe" "../$RELEASE_DIR/GameStreamingHost-Setup.exe" 2>/dev/null || true
cp "dist/Game Streaming Host.exe" "../$RELEASE_DIR/GameStreamingHost-Portable.exe" 2>/dev/null || true
echo "✅ Host EXE created"
cd ..

echo ""
echo "[3/5] Creating documentation..."
echo "# Game Streaming Platform v$VERSION

## Installation

### Server Installation
1. Download: GameStreamingServer.exe
2. Copy server.env.example to .env
3. Configure settings
4. Run: GameStreamingServer.exe

### Host Installation
1. Download: GameStreamingHost-Setup.exe
2. Run installer or portable version
" > "$RELEASE_DIR/INSTALL.md"
echo "✅ Documentation created"

echo ""
echo "================================"
echo "✅ Build Complete!"
echo "================================"
echo ""
echo "📦 Release files in: $RELEASE_DIR/"
echo ""
