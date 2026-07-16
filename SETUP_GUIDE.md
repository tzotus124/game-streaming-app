# Game Streaming Suite - Setup & Configuration Guide

## 🚀 Quick Start

### Prerequisites
Before starting, ensure you have:
- Windows 10 or later (all 3 PCs)
- .NET Framework 4.7.2 or later
- Administrator privileges
- Stable internet connection

### Required Software

**Always-On PC:**
```
- WireGuard VPN
  Download: https://www.wireguard.com/install/
- .NET Framework 4.7.2+
```

**Host PC:**
```
- Sunshine Streaming Server
  Download: https://github.com/LizardByte/Sunshine/releases
  
- NVIDIA GPU:
  - Driver 450+
  - NVENC support
  
- AMD GPU:
  - Driver 20.50+
  - VCE support
```

**Client PC:**
```
- Moonlight Game Streaming
  Download: https://moonlight-stream.org/
  
- WireGuard VPN
  Download: https://www.wireguard.com/install/
```

---

## 📋 Step-by-Step Setup

### Phase 1: Always-On PC Configuration (30 minutes)

#### Step 1.1 - Install WireGuard
```
1. Download WireGuard installer
2. Run installer as Administrator
3. Complete installation
4. Launch WireGuard
5. Create new private/public key pair
```

#### Step 1.2 - Launch AlwaysOnPC.exe
```
1. Double-click AlwaysOnPC.exe
2. Application auto-generates Master Token
3. Token is automatically saved to:
   C:\Users\{username}\AppData\Roaming\GameStreamingRelay\master_token.key
```

#### Step 1.3 - Copy Master Token
```
1. Click "📋 Copy Master Token" button
2. Save to secure location:
   - Password manager
   - Encrypted note
   - Print and store physically
3. Share ONLY with trusted Client PC admins
```

#### Step 1.4 - Configure WireGuard
```
1. In AlwaysOnPC app, click "⚙️ Configure WireGuard"
2. Navigate to: %APPDATA%\WireGuard\
3. Edit or import WireGuard config:
   [Interface]
   PrivateKey = <generated_key>
   Address = 10.0.0.1/24
   ListenPort = 51820
   
   [Peer]
   PublicKey = <client_public_key>
   AllowedIPs = 10.0.0.2/32
   
4. Save configuration
```

#### Step 1.5 - Connect WireGuard
```
1. Click "⚙️ Connect VPN" in AlwaysOnPC
2. Verify "✓ VPN Connected" appears
3. Status indicator turns green
```

#### Step 1.6 - Start Relay Service
```
1. Click "▶️ Start Relay" button
2. Verify "✓ Relay Active" status
3. Check "📋 View Logs" for connections
```

---

### Phase 2: Host PC Configuration (20 minutes)

#### Step 2.1 - Install Sunshine
```
1. Download Sunshine from GitHub releases
2. Run installer as Administrator
3. Follow installation prompts
4. Launch Sunshine (system tray)
5. Open browser to: http://localhost:47990
```

#### Step 2.2 - Launch HostPC.exe
```
1. Double-click HostPC.exe
2. Application displays your MAC address
3. Example: "00:1A:2B:3C:4D:5E"
```

#### Step 2.3 - Copy MAC Address
```
1. Click "📋 Copy MAC Address" button
2. MAC is copied to clipboard
3. Send to Always-On PC admin via secure channel
```

#### Step 2.4 - Configure Sunshine
```
1. Open Sunshine web interface: http://localhost:47990
2. Configure settings:
   
   Streaming Settings:
   - Resolution: 1920x1080 (or higher)
   - Bitrate: 10 Mbps (adjust for your network)
   - Encoder: NVIDIA/AMD (GPU accelerated)
   - FPS: 60
   
   Audio:
   - Enable surround sound if supported
   - Select default audio device
   
   Advanced:
   - Enable 10-bit color (if supported)
   - Hardware encoding enabled
```

#### Step 2.5 - Enable Wake-on-LAN
```
1. Open Device Manager (right-click Network Adapter)
2. Properties → Advanced tab
3. Find "Wake on Magic Packet" setting
4. Set to "Enabled"
5. Also enable in BIOS:
   - Restart computer
   - Enter BIOS (Del/F2/F10 key)
   - Find "Wake-on-LAN" or "Power Management"
   - Set to "Enabled"
```

#### Step 2.6 - Start Sunshine Server
```
1. In HostPC.exe app, click "▶️ Start Sunshine"
2. Verify "✓ Running" status appears
3. Status indicator turns green
4. Server is ready for streaming
```

---

### Phase 3: Client PC Configuration (25 minutes)

#### Step 3.1 - Install Moonlight
```
1. Download Moonlight from https://moonlight-stream.org/
2. Run installer
3. Complete installation
4. Launch Moonlight
5. Pair with Host PC (will do in later step)
```

#### Step 3.2 - Install WireGuard
```
1. Download WireGuard installer
2. Run as Administrator
3. Complete installation
4. Do NOT connect yet
```

#### Step 3.3 - Launch ClientPC.exe
```
1. Double-click ClientPC.exe
2. Ready to input relay credentials
```

#### Step 3.4 - Enter Relay Token
```
1. Obtain Master Token from Always-On PC admin
2. Copy token from secure message
3. In ClientPC app, paste into "Relay Token" field
4. Click "✓ Validate Token"
5. Confirmation message appears
```

#### Step 3.5 - Enter Host MAC Address
```
1. Obtain Host PC MAC from HostPC app
2. Format: "00:1A:2B:3C:4D:5E" or "00-1A-2B-3C-4D-5E"
3. Paste into "Host MAC Address" field
4. Click "✓ Validate MAC"
5. Green status: MAC accepted
```

#### Step 3.6 - Wake Host PC (if powered off)
```
1. Click "☀️ Wake Host (WoL)" button
2. Magic packet is sent
3. Wait 10-30 seconds for Host to boot
4. Check that Sunshine server is running on Host
```

#### Step 3.7 - Connect WireGuard
```
1. Click "🔗 Connect WireGuard" button
2. WireGuard system tray opens
3. VPN tunnel established
4. Status changes to "✓ Connected"
5. Now connected via relay server
```

#### Step 3.8 - Pair with Host PC
```
1. In Moonlight app, "Add PC"
2. Enter Host IP: 10.0.0.2 (internal VPN IP)
   or IP from Always-On PC relay
3. Moonlight discovers Sunshine
4. Generate PIN on Host
5. Enter PIN in Moonlight
6. Pairing complete
```

#### Step 3.9 - Start Game Streaming
```
1. In ClientPC.exe, click "▶️ Start Stream"
2. Moonlight launches with available games
3. Select game to stream
4. Streaming starts
5. Play!
```

---

## 🔧 Configuration Files

### Always-On PC Config Locations

**Master Token:**
```
%APPDATA%\GameStreamingRelay\master_token.key
```

**WireGuard Config:**
```
%APPDATA%\WireGuard\wg0.conf
```

**Relay Logs:**
```
%APPDATA%\GameStreamingRelay\relay.log
```

### Host PC Config Locations

**Sunshine Config:**
```
%APPDATA%\Sunshine\config.conf
```

**Sunshine Logs:**
```
%APPDATA%\Sunshine\logs\
```

### Client PC Config Locations

**WireGuard Config:**
```
%APPDATA%\WireGuard\clientvpn.conf
```

**Moonlight Config:**
```
%APPDATA%\Moonlight Game Streaming\
```

---

## 🌐 Network Architecture

### IP Address Scheme

```
Always-On PC:   10.0.0.1 (VPN Server)
Host PC:        10.0.0.2 (Peer)
Client PC:      10.0.0.3 (Peer)

External IPs:
Always-On PC:   <your_public_ip>:51820 (WireGuard)
Host PC:        <local_network_ip>
Client PC:      <client_public_ip>
```

### Port Forwarding (if needed)

**Always-On PC:**
```
Router Port Forwarding:
External Port: 51820 (UDP)
→ Internal IP: <always_on_pc_ip>
→ Internal Port: 51820
Protocol: UDP
```

**Host PC (Local Network only):**
```
Sunshine typically runs on ports:
- TCP 47990 (Web UI)
- TCP 48010 (RTSP)
- UDP 48000-48002 (Streaming)
```

---

## 🔐 Security Best Practices

### Token Management
```
✓ Do:
  - Store Master Token in password manager
  - Change token yearly
  - Regenerate if compromised
  - Use HTTPS when sharing

✗ Don't:
  - Share via unencrypted chat
  - Store in plain text emails
  - Leave on shared computers
  - Post in forums/social media
```

### MAC Address Privacy
```
✓ Do:
  - Share MAC only with authorized users
  - Use WireGuard for encryption
  - Monitor relay logs for anomalies
  
✗ Don't:
  - Broadcast MAC publicly
  - Disable firewall
  - Use default WireGuard keys
```

### WireGuard Security
```
1. Generate strong key pairs
2. Rotate keys quarterly
3. Use 51820 UDP (non-standard preferred)
4. Enable firewall rules
5. Monitor connection logs
```

---

## 🐛 Troubleshooting

### AlwaysOnPC Issues

**Problem: Token not saving**
```
Solution:
1. Run as Administrator
2. Check AppData folder exists
3. Verify file permissions
4. Restart application
```

**Problem: WireGuard not connecting**
```
Solution:
1. Verify WireGuard installed
2. Check config file syntax
3. Firewall settings: Allow WireGuard
4. Test with `wg show` command
```

**Problem: Relay service not starting**
```
Solution:
1. Connect WireGuard first
2. Check relay logs
3. Verify network connectivity
4. Restart AlwaysOnPC application
```

### HostPC Issues

**Problem: MAC address showing 00:00:00:00:00:00**
```
Solution:
1. Ensure network adapter is active
2. Check network adapter drivers
3. Enable "Link State Trigger" in adapter properties
4. Restart application
```

**Problem: Sunshine not starting**
```
Solution:
1. Verify Sunshine installed
2. Check GPU drivers installed
3. Run as Administrator
4. Review Sunshine logs
5. Disable antivirus temporarily
```

**Problem: WoL not working**
```
Solution:
1. Enable in BIOS (Deep Sleep Control)
2. Enable in network adapter properties
3. Ethernet only (WiFi may not support)
4. Check MAC address format
5. Test with WoL utility tool
```

### ClientPC Issues

**Problem: Token validation fails**
```
Solution:
1. Verify token copied correctly
2. No leading/trailing spaces
3. Check relay server is running
4. Verify network connectivity
```

**Problem: Cannot connect WireGuard**
```
Solution:
1. WireGuard installed?
2. Config file correct?
3. Firewall rules allow WireGuard?
4. Test: wg-quick up clientvpn
5. Check event logs for errors
```

**Problem: Streaming latency high**
```
Solution:
1. Check network bandwidth: speedtest.net
2. Reduce streaming resolution
3. Lower bitrate in Moonlight
4. Use ethernet instead of WiFi
5. Reduce max FPS to 30
```

**Problem: Cannot pair with Host**
```
Solution:
1. Verify Host IP (10.0.0.2 or relay IP)
2. Sunshine web UI accessible?
3. Firewall on Host blocking?
4. PIN generation enabled in Sunshine
5. Restart Moonlight and try again
```

---

## 📊 Performance Tuning

### Moonlight Client Settings

```
Optimal for Streaming:

Resolution:
- 1080p @ 60fps = 10 Mbps (good)
- 1440p @ 60fps = 15 Mbps (excellent)
- 4K @ 30fps = 25 Mbps (requires fast internet)

Video Codec:
- H.264 (compatible, lower bitrate)
- H.265 (efficient, better compression)
- AV1 (best compression, newest)

Audio:
- Stereo (low overhead)
- Surround 5.1 (richer, higher bitrate)
```

### Sunshine Server Settings

```
Optimal for Encoding:

GPU Encoding:
- NVIDIA NVENC (best for NVIDIA)
- AMD VCE (best for AMD)
- Intel QSV (Intel systems)

Bitrate:
- CBR (Constant, predictable)
- VBR (Variable, quality-based)

Key Frame Interval:
- 2 seconds (default, good balance)
- 1 second (more key frames, higher bitrate)
```

### WireGuard Performance

```
MTU Settings:
- Standard Ethernet: 1500 bytes
- WireGuard overhead: ~80 bytes
- Recommended: MTU 1420

UDP Buffer Sizes:
- Receive: 212992 bytes
- Send: 212992 bytes
```

---

## 📞 Support Resources

### Official Documentation
- **Sunshine**: https://docs.lizardbyte.dev/projects/sunshine/
- **Moonlight**: https://github.com/moonlight-stream/moonlight-docs
- **WireGuard**: https://www.wireguard.com/

### Community
- Sunshine Discussions: https://github.com/LizardByte/Sunshine/discussions
- Moonlight Issues: https://github.com/moonlight-stream/moonlight-qt/issues
- r/gamestreaming on Reddit

---

## 🔄 Maintenance

### Weekly Tasks
- Monitor relay logs for errors
- Check WireGuard connection stability
- Test WoL functionality
- Verify Sunshine still running on Host

### Monthly Tasks
- Review firewall rules
- Check for driver updates (GPU/Network)
- Monitor network bandwidth usage
- Test with different games/applications

### Quarterly Tasks
- Rotate WireGuard keys
- Review security logs
- Update all software
- Document changes made

---

## ✅ Verification Checklist

Before declaring setup complete:

```
Always-On PC:
☐ Master token generated and saved
☐ WireGuard connected and active
☐ Relay service running
☐ Can see connection logs
☐ Firewall allows port 51820 UDP

Host PC:
☐ MAC address readable and shareable
☐ Sunshine installed and running
☐ Web UI accessible (localhost:47990)
☐ GPU streaming working
☐ WoL enabled in BIOS and adapter

Client PC:
☐ Relay token validated
☐ Host MAC validated
☐ WoL magic packet received
☐ WireGuard connecting successfully
☐ Can connect to Sunshine on Host IP
☐ Game streaming with <50ms latency
```

Once all items checked, your game streaming suite is ready!
