# 📥 Download Game Streaming App

## Quick Download - No Building Required!

### **Step 1: Go to Releases**

Visit: **https://github.com/tzotus124/game-streaming-app/releases**

### **Step 2: Choose Your Download**

#### **Option A: Download Everything (Recommended)**
- **File:** `GameStreamingApp-v1.0.0.zip`
- **Size:** ~250 MB
- **Contents:** All EXE files + documentation
- **Click:** Download and extract

#### **Option B: Download Individual Files**

**Always needed:**
- **GameStreamingServer.exe** (~45 MB) - The server

**Choose one:**
- **GameStreamingHost-Setup.exe** (~60 MB) - Installer version (recommended)
- **GameStreamingHost-Portable.exe** (~180 MB) - Portable version (no install)

### **Step 3: Run the Application**

```bash
# 1. Extract downloaded files
# 2. Create folder: C:\GameStreaming
# 3. Move files there
# 4. Double-click GameStreamingServer.exe
# 5. Double-click GameStreamingHost-Setup.exe or Portable version
```

---

## 📋 System Requirements

### **Server PC**
- ✅ Windows 7+
- ✅ 2GB RAM
- ✅ 500MB disk
- ✅ Internet connection

### **Host PC (Gaming PC)**
- ✅ Windows 8+
- ✅ 4GB RAM (8GB recommended)
- ✅ GPU with encoding
- ✅ Internet connection

### **Client PC (Browser)**
- ✅ Any OS
- ✅ Chrome, Firefox, Safari, or Edge
- ✅ 2GB RAM
- ✅ Internet connection

---

## 🚀 First Time Setup

### **1. Start the Server**

```cmd
Doubleclick GameStreamingServer.exe
```

✅ You'll see: `🎮 Game Streaming Server running on port 8000`

### **2. Run the Host App**

```cmd
Doubleclick GameStreamingHost-Setup.exe
# or
Doubleclick GameStreamingHost-Portable.exe
```

✅ The app will open with a beautiful interface

### **3. Connect and Stream**

1. **Server URL:** `http://localhost:8000` (default)
2. **Click:** "Connect to Server" → turns green
3. **Click:** "Generate Room ID"
4. **Click:** "🔴 Start Streaming"
5. **Open browser:** `http://localhost:3000`
6. **Enter Room ID** and watch the stream!

---

## 📊 File Information

| File | Size | Purpose |
|------|------|----------|
| GameStreamingServer.exe | 45 MB | Backend server |
| GameStreamingHost-Setup.exe | 60 MB | Host installer |
| GameStreamingHost-Portable.exe | 180 MB | Portable host |
| CHECKSUMS.txt | 1 KB | Verify files |
| INSTALL.md | 5 KB | Instructions |

---

## 🔍 Verify Download

### **Windows**
```cmd
certutil -hashfile GameStreamingServer.exe SHA256
```

### **macOS/Linux**
```bash
sha256sum GameStreamingServer.exe
```

Compare with values in `CHECKSUMS.txt`

---

## 🛠️ For Developers: Build from Source

### **Clone Repository**

```bash
git clone https://github.com/tzotus124/game-streaming-app.git
cd game-streaming-app
```

### **Build EXE Files**

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

**Files will be in:** `releases/` folder

---

## 📖 Full Documentation

- **Installation:** [docs/DOWNLOAD_INSTALL.md](./docs/DOWNLOAD_INSTALL.md)
- **Architecture:** [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)
- **Getting Started:** [docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md)
- **Build Guide:** [docs/BUILD_EXE.md](./docs/BUILD_EXE.md)
- **Releases:** [docs/RELEASES_SETUP.md](./docs/RELEASES_SETUP.md)

---

## ❓ Need Help?

- **GitHub Issues:** [Report problems](https://github.com/tzotus124/game-streaming-app/issues)
- **GitHub Discussions:** [Ask questions](https://github.com/tzotus124/game-streaming-app/discussions)
- **Full Guide:** [Installation Guide](./docs/DOWNLOAD_INSTALL.md)

---

**Ready?** [👉 Download Now](https://github.com/tzotus124/game-streaming-app/releases) 🎮
