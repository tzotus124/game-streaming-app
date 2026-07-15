# 📥 Installation Guide

## Quick Install

### **3-Step Setup**

1. **Download** from [Releases](https://github.com/tzotus124/game-streaming-app/releases)
2. **Extract** ZIP file
3. **Run** the EXE files

---

## Server Installation

### **Step 1: Download Server**

- Download: `GameStreamingServer.exe`
- Size: ~45 MB

### **Step 2: Create Server Folder**

```cmd
mkdir C:\GameStreamingServer
cd C:\GameStreamingServer
```

### **Step 3: Move EXE**

- Copy `GameStreamingServer.exe` to `C:\GameStreamingServer\`

### **Step 4: Configure (Optional)**

Create `.env` file in same folder:

```env
NODE_ENV=production
PORT=8000
JWT_SECRET=your-secret-key
CORS_ORIGIN=*
```

### **Step 5: Run Server**

```cmd
GameStreamingServer.exe
```

✅ You should see:
```
🎮 Game Streaming Server running on port 8000
```

---

## Host Installation

### **Option A: Installer Version (Recommended)**

#### **Download**
- Download: `GameStreamingHost-Setup.exe`
- Size: ~60 MB

#### **Install**
1. Double-click `GameStreamingHost-Setup.exe`
2. Follow wizard
3. Click "Finish"
4. App launches automatically

#### **First Run**
1. Enter Server URL: `http://localhost:8000`
2. Click: "Connect to Server"
3. Generate or enter Room ID
4. Click: "Start Streaming"

### **Option B: Portable Version**

#### **Download**
- Download: `GameStreamingHost-Portable.exe`
- Size: ~180 MB

#### **Run**
1. Double-click `GameStreamingHost-Portable.exe`
2. App runs immediately
3. No installation needed
4. Can run from USB drive

---

## System Requirements

### **Server PC**
```
✅ Windows 7 SP1 or later
✅ 2GB RAM minimum
✅ 500MB free disk space
✅ Internet connection
✅ PostgreSQL 12+ (optional, can use cloud)
✅ Redis 6+ (optional, can use cloud)
```

### **Host PC (Gaming PC)**
```
✅ Windows 8 or later
✅ 4GB RAM minimum (8GB recommended)
✅ 200MB free disk space
✅ GPU with hardware encoding (NVIDIA/AMD)
✅ Stable internet connection
✅ Latest GPU drivers
```

### **Client PC**
```
✅ Windows, macOS, or Linux
✅ Modern web browser (Chrome, Firefox, Safari, Edge)
✅ 2GB RAM
✅ Stable internet connection
```

---

## First Time Configuration

### **Server Configuration**

**Default Settings (No Config Needed)**
- Port: 8000
- Database: SQLite (local)
- Cache: In-memory

**Advanced Configuration** (Create `.env` file):

```env
# Server
NODE_ENV=production
PORT=8000
LOG_LEVEL=info

# Security
JWT_SECRET=your-very-secret-key-change-this
CORS_ORIGIN=*

# Database (optional - uses SQLite by default)
DATABASE_URL=postgresql://user:pass@localhost/gamestreaming

# Cache (optional - uses in-memory by default)
REDIS_URL=redis://localhost:6379
```

### **Host Application Configuration**

**In the UI:**
1. **Server URL** - Where your server is running
   - Local: `http://localhost:8000`
   - Remote: `http://192.168.1.100:8000`
   - Cloud: `https://yourdomain.com:8000`

2. **Username** - Your display name
   - Default: "Host"
   - Can be anything

3. **Room ID** - Unique identifier for stream
   - Auto-generate with button
   - Or enter custom ID

---

## Verification

### **Check Server Health**

#### **Windows Command Line**
```cmd
curl http://localhost:8000/health
```

#### **Browser**
```
http://localhost:8000/health
```

✅ Should show:
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00Z",
  "uptime": 123.45
}
```

### **Check Host Connection**

1. Open Host app
2. Server URL field
3. Click "Connect to Server"
4. ✅ Button should turn green

---

## Port Configuration

### **If Port 8000 is Already Used**

#### **Windows**
```cmd
# Check what's using port 8000
netstat -ano | findstr :8000

# Change port in .env
set PORT=8001
GameStreamingServer.exe
```

#### **macOS/Linux**
```bash
# Check what's using port 8000
lsof -i :8000

# Change port
export PORT=8001
GameStreamingServer.exe
```

---

## Firewall Setup

### **Windows Firewall**

1. Open: **Windows Defender Firewall**
2. Click: **Allow an app through firewall**
3. Click: **Change settings**
4. Click: **Allow another app**
5. Browse to: `GameStreamingServer.exe`
6. Click: **Add**
7. Make sure both checkboxes are checked
8. Click: **OK**

### **Router Setup** (for remote access)

1. Open router admin panel
2. Find: Port Forwarding
3. Forward port 8000 to your server PC IP
4. Example: `192.168.1.100:8000 -> WAN:8000`

---

## Network Configuration

### **Local Network**
- Server URL: `http://192.168.1.100:8000`
- Find IP: Open Command Prompt, type `ipconfig`

### **Internet**
- Server URL: `http://your-public-ip:8000`
- Find IP: Visit https://whatismyipaddress.com
- **Note:** Requires port forwarding on router

### **Cloud**
- Server URL: `https://yourdomain.com:8000`
- Deploy to cloud (AWS, Azure, DigitalOcean, etc.)

---

## Troubleshooting

### **Server won't start**

**Error:** "EADDRINUSE: address already in use"

**Solution:**
```cmd
set PORT=8001
GameStreamingServer.exe
```

### **Host can't connect to server**

**Error:** "Connection refused" or timeout

**Solutions:**
1. Verify server is running
2. Check server URL is correct
3. Ping server: `ping localhost` or `ping 192.168.1.100`
4. Check Windows Firewall
5. Try `127.0.0.1` instead of `localhost`

### **Database error**

**Error:** "Cannot connect to database"

**Solutions:**
1. Ensure PostgreSQL is running
2. Check DATABASE_URL is correct
3. Test connection: `psql -U postgres -h localhost`
4. Use default SQLite (remove DATABASE_URL from .env)

### **Redis error**

**Error:** "Cannot connect to Redis"

**Solutions:**
1. Start Redis service
2. Or remove REDIS_URL from .env to use in-memory cache

### **Host app crashes**

**Solution:**
1. Delete `AppData\Local\Game Streaming Host` folder
2. Reinstall application
3. Or use portable version

---

## Performance Optimization

### **Server PC**
- Close unnecessary applications
- Use wired ethernet (not WiFi)
- Monitor CPU: `tasklist /v`
- Monitor RAM: `systeminfo | find "Available Physical Memory"`

### **Host PC (Gaming PC)**
- Update GPU drivers
- Close background applications
- Use wired ethernet connection
- Enable hardware acceleration in game settings

### **Network**
- Wired connection recommended
- Minimum 10 Mbps for smooth streaming
- 50+ Mbps recommended for best quality
- Low latency (< 50ms) preferred

---

## Uninstallation

### **Server**

```cmd
# Simply delete the folder
rmdir /s C:\GameStreamingServer
```

### **Host Application**

#### **If Installer Version**
1. Open: **Control Panel** → **Programs** → **Uninstall a program**
2. Find: **Game Streaming Host**
3. Click: **Uninstall**
4. Follow wizard

#### **If Portable Version**
1. Delete: `GameStreamingHost-Portable.exe`
2. Done!

---

## Getting Help

### **Before Contacting Support**

1. ✅ Verified server is running
2. ✅ Checked firewall settings
3. ✅ Tested network connection
4. ✅ Checked system requirements
5. ✅ Read documentation

### **Support Resources**

- **GitHub Issues:** https://github.com/tzotus124/game-streaming-app/issues
- **GitHub Discussions:** https://github.com/tzotus124/game-streaming-app/discussions
- **Documentation:** https://github.com/tzotus124/game-streaming-app/blob/main/README.md
- **Architecture:** https://github.com/tzotus124/game-streaming-app/blob/main/docs/ARCHITECTURE.md

---

## ✅ Installation Checklist

- [ ] Downloaded GameStreamingServer.exe
- [ ] Created server folder
- [ ] Ran server successfully
- [ ] Downloaded GameStreamingHost EXE
- [ ] Installed or extracted host app
- [ ] Connected host to server (button green)
- [ ] Generated room ID
- [ ] Started streaming
- [ ] Opened client in browser
- [ ] Entered room ID and joined
- [ ] Verified video stream working

**All checked?** Ready to stream! 🎮
