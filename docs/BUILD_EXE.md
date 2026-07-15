# Building EXE Files - Complete Guide

## Prerequisites

- Node.js 18+
- Git
- Visual Studio Build Tools (for Windows native modules)

## Build Both EXE Files

### Quick Start (Windows)

```batch
# Navigate to project root
cd game-streaming-app

# Build Server EXE
cd server
build-exe.bat

# Build Host EXE
cd ..
cd host
npm install
npm run dist
```

### Quick Start (macOS/Linux)

```bash
# Navigate to project root
cd game-streaming-app

# Build Server EXE
cd server
chmod +x build-exe.sh
./build-exe.sh

# Build Host EXE
cd ..
cd host
npm install
npm run dist
```

## Manual Build Steps

### Build GameStreamingServer.exe

```bash
cd server

# Install dependencies
npm install

# Build TypeScript
npm run build

# Install pkg globally
npm install -g pkg

# Create Windows EXE
npx pkg dist/index.js --targets win --output GameStreamingServer.exe --compress Brotli
```

**Output:** `server/GameStreamingServer.exe` (~45 MB)

### Build GameStreamingHost.exe

```bash
cd host

# Install dependencies
npm install

# Build and create EXE
npm run dist
```

**Output:** 
- `host/dist/Game Streaming Host Setup 1.0.0.exe` (Installer - ~60 MB)
- `host/dist/Game Streaming Host.exe` (Portable - ~180 MB)

## Generated Files Location

```
project/
├── server/
│   ├── GameStreamingServer.exe          ← Server standalone EXE
│   ├── node_modules/
│   └── dist/
├── host/
│   └── dist/
│       ├── Game Streaming Host Setup 1.0.0.exe  ← Installer
│       ├── Game Streaming Host.exe        ← Portable
│       └── resources/
```

## Running the Applications

### 1. Start the Server

```cmd
# Run EXE directly
GameStreamingServer.exe

# Or with environment variables
set PORT=8000
set NODE_ENV=production
GameStreamingServer.exe
```

Server will start on http://localhost:8000

### 2. Install and Run the Host

**Option A: Use Installer**
```cmd
Double-click "Game Streaming Host Setup 1.0.0.exe"
```

**Option B: Run Portable**
```cmd
Double-click "Game Streaming Host.exe"
```

## Configuration

### Server Configuration

Create `.env` file in same directory as `GameStreamingServer.exe`:

```env
NODE_ENV=production
PORT=8000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/gamestreaming
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-production-secret-key
CORS_ORIGIN=*
LOG_LEVEL=info
```

### Host Configuration

The Host application is preconfigured to:
- Connect to http://localhost:8000 by default
- Allow customization in the UI
- Auto-generate room IDs

## Troubleshooting

### Server EXE Issues

**Error: Port already in use**
```bash
set PORT=8001
GameStreamingServer.exe
```

**Error: Cannot find module**
```bash
cd server
npm install
npm run build
npm install -g pkg
npx pkg dist/index.js --targets win --output GameStreamingServer.exe
```

**Error: Database connection failed**
```bash
# Ensure PostgreSQL is running
# Update DATABASE_URL in .env file
```

### Host EXE Issues

**Error: electron-builder not found**
```bash
cd host
npm install
npm install -D electron-builder
```

**Error: Cannot connect to server**
- Ensure server is running on configured URL
- Check firewall settings
- Verify server URL in the Host UI

## Distribution

### For Server
1. Distribute `GameStreamingServer.exe` standalone
2. Include `.env.example` template
3. Users run EXE with their own .env configuration

### For Host
1. Use the installer (`Game Streaming Host Setup.exe`) for users
2. Or distribute portable version for USB/network deployment

## File Sizes (Approximate)

| File | Size | Type |
|------|------|------|
| GameStreamingServer.exe | 45 MB | Standalone server |
| Game Streaming Host Setup.exe | 60 MB | Installer |
| Game Streaming Host.exe | 180 MB | Portable |

## Updating

To create new versions:

```bash
# 1. Update version in package.json
# 2. Rebuild EXE files
npm run build
npm run dist  # for host
npm run exe   # for server
# 3. Redistribute new EXE files
```

## Performance Tips

- **Server:** Run on dedicated machine or cloud instance
- **Host:** Run on gaming PC with good GPU for encoding
- **Network:** Use wired connection for best results
- **Database:** Use PostgreSQL on same network as server

## Support

For issues or questions, refer to:
- Main README: ../README.md
- Architecture: ./ARCHITECTURE.md
- Getting Started: ./GETTING_STARTED.md
