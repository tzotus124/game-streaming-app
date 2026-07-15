# 📦 GitHub Releases - Setup Guide

## Creating GitHub Releases

### **Step 1: Build Release Files**

#### **Windows**
```batch
cd scripts
build-release.bat
```

#### **macOS/Linux**
```bash
cd scripts
chmod +x build-release.sh
./build-release.sh
```

Files will be created in `releases/` folder:
- `GameStreamingServer.exe`
- `GameStreamingHost-Setup.exe`
- `GameStreamingHost-Portable.exe`
- `INSTALL.md`
- `CHECKSUMS.txt`

### **Step 2: Upload to GitHub Releases**

**Option A: Using Web Interface** (Easiest)

1. Go to: https://github.com/tzotus124/game-streaming-app/releases
2. Click: **Draft a new release**
3. Fill in:
   - **Tag version:** `v1.0.0`
   - **Release title:** `Game Streaming App v1.0.0`
   - **Description:**
     ```markdown
     # Game Streaming App v1.0.0
     
     ## Download
     
     - **GameStreamingServer.exe** - Backend server (~45 MB)
     - **GameStreamingHost-Setup.exe** - Host installer (~60 MB)
     - **GameStreamingHost-Portable.exe** - Portable host (~180 MB)
     
     ## Installation
     See [Installation Guide](https://github.com/tzotus124/game-streaming-app/blob/main/docs/DOWNLOAD_INSTALL.md)
     
     ## Features
     - Ultra-low latency WebRTC streaming
     - Hardware-accelerated encoding
     - Cross-platform support
     - Beautiful UI
     - Full documentation
     
     ## Requirements
     - Windows 7+ for server
     - Windows 8+ for host
     - Modern browser for client
     ```
4. Upload files:
   - Drag files from `releases/` folder
   - Or click **Attach binaries**
5. Click: **Publish release**

**Option B: Using GitHub CLI**

```bash
# Install GitHub CLI: https://cli.github.com

gh release create v1.0.0 \
  releases/*.exe \
  releases/CHECKSUMS.txt \
  releases/INSTALL.md \
  --title "Game Streaming App v1.0.0" \
  --notes "Initial release"
```

### **Step 3: Share Download Links**

After release is published:

```markdown
## Direct Download Links

- [GameStreamingServer.exe](https://github.com/tzotus124/game-streaming-app/releases/download/v1.0.0/GameStreamingServer.exe)
- [GameStreamingHost-Setup.exe](https://github.com/tzotus124/game-streaming-app/releases/download/v1.0.0/GameStreamingHost-Setup.exe)
- [GameStreamingHost-Portable.exe](https://github.com/tzotus124/game-streaming-app/releases/download/v1.0.0/GameStreamingHost-Portable.exe)
- [All Files (ZIP)](https://github.com/tzotus124/game-streaming-app/releases/download/v1.0.0/GameStreamingApp-v1.0.0.zip)
```

---

## Update Process

### **For Version 1.0.1**

1. Update version in package.json files
   ```json
   {
     "version": "1.0.1"
   }
   ```

2. Rebuild
   ```bash
   cd scripts
   build-release.bat  # or build-release.sh
   ```

3. Create new release
   ```bash
   gh release create v1.0.1 releases/*
   ```

---

## Distribution

### **Share with Users**

**Email/Discord:**
```
Download Game Streaming App:
https://github.com/tzotus124/game-streaming-app/releases/latest
```

**Social Media:**
```
🎮 Game Streaming App v1.0.0 Released!
📥 Download: [link]
⭐ Star on GitHub
```

**Website:**
```html
<a href="https://github.com/tzotus124/game-streaming-app/releases/latest">
  Download Game Streaming App
</a>
```

---

## File Verification

### **Check Checksums**

**Windows:**
```cmd
certutil -hashfile GameStreamingServer.exe SHA256
```

**macOS/Linux:**
```bash
sha256sum GameStreamingServer.exe
```

Compare with `CHECKSUMS.txt` from release.

---

## Automated Releases (Optional)

Set up GitHub Actions for automatic releases on tag push:

**Create `.github/workflows/release.yml`:**

```yaml
name: Build and Release

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Build Release
        run: .\scripts\build-release.bat
      
      - name: Create Release
        uses: softprops/action-gh-release@v1
        with:
          files: releases/*
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Then just push a tag:
```bash
git tag v1.0.1
git push origin v1.0.1
```

---

## Monitoring Downloads

### **Track Download Statistics**

1. Go to release page
2. Click release
3. Scroll down to see download counts

### **Update Release**

1. Click **Edit** on release
2. Update description
3. Add new files if needed
4. Click **Save changes**

---

## Next Steps

✅ Build EXE files
✅ Create GitHub Release
✅ Upload files
✅ Share download links
✅ Users can download and run!

**Users download from:** https://github.com/tzotus124/game-streaming-app/releases
