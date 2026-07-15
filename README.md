# Game Streaming Platform - All-in-One Solution

A complete, production-ready game streaming application supporting remote play across client PC, host PC, and always-on relay servers.

## 🎮 Features

✅ **Ultra-Low Latency Streaming** - WebRTC-based (50-150ms)
✅ **Cross-Platform Support** - Windows, macOS, Linux
✅ **Hardware-Accelerated Encoding** - NVIDIA/AMD GPU support
✅ **Scalable Architecture** - Relay servers, SFU support
✅ **End-to-End Encryption** - WebRTC built-in security
✅ **Real-Time Input** - Mouse, keyboard, gamepad support
✅ **Adaptive Bitrate** - Dynamic quality adjustment
✅ **Web Dashboard** - Monitor and manage streams
✅ **Docker Ready** - One-command deployment
✅ **Full Documentation** - Setup guides and API docs

## 🏗️ Architecture

```
┌─────────────┐         ┌──────────────┐         ┌──────────────┐
│  Client PC  │◄────────┤  Always-On   │────────►│  Host PC     │
│  (Player)   │ WebRTC  │    Server    │ WebRTC  │  (Streamer)  │
└─────────────┘         │ (Signaling,  │         └──────────────┘
                        │  Relay, Auth)│
                        └──────────────┘
                               │
                               ▼
                        ┌──────────────┐
                        │   Dashboard  │
                        │   (React)    │
                        └──────────────┘
```

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Streaming:** WebRTC, FFmpeg, NVIDIA NVENC/AMD VCE
- **Backend:** Node.js, Express, Socket.io
- **Database:** PostgreSQL
- **Relay:** Coturn (TURN server)
- **Infrastructure:** Docker, Docker Compose
- **Monitoring:** Winston Logger, Prometheus

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+
- FFmpeg with hardware acceleration support
- Git

### Development Setup

```bash
# Clone repository
git clone https://github.com/tzotus124/game-streaming-app.git
cd game-streaming-app

# Copy environment variables
cp .env.example .env

# Start all services
docker-compose up -d

# Access dashboard
open http://localhost:3000
```

### Health Check

```bash
curl http://localhost:8000/health
```

## 📁 Project Structure

```
game-streaming-app/
├── server/                    # Backend services
│   ├── src/
│   │   ├── services/         # Business logic
│   │   ├── middleware/       # Express middleware
│   │   └── utils/            # Utilities
│   ├── package.json
│   └── Dockerfile
├── client/                    # Web player
├── host/                      # Game capture app
├── dashboard/                 # Management UI
├── docker/                    # Docker configs
├── docs/                      # Documentation
└── docker-compose.yml        # Local development
```

## 📚 Documentation

- [Getting Started](./docs/GETTING_STARTED.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Troubleshooting](./docs/TROUBLESHOOTING.md)

## 🔒 Security

- ✅ WebRTC DTLS encryption (media)
- ✅ SRTP encryption (streams)
- ✅ JWT authentication (signaling)
- ✅ TLS 1.3 (server communication)
- ✅ TURN credentials rotation

## 📊 Performance

- **Latency:** 50-150ms (vs 1-5s for RTMP)
- **Codec Support:** H.264, VP8, VP9, AV1
- **GPU Encoding:** NVIDIA NVENC, AMD VCE
- **Adaptive Bitrate:** 500 Kbps - 20 Mbps
- **Frame Rate:** Up to 120 FPS

## 🤝 Contributing

Contributions welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📄 License

MIT License - see [LICENSE](./LICENSE)

## 💬 Support

- 📧 Email: support@gamestreaming.local
- 🐛 Issues: [GitHub Issues](https://github.com/tzotus124/game-streaming-app/issues)
- 📖 Wiki: [Project Wiki](https://github.com/tzotus124/game-streaming-app/wiki)
