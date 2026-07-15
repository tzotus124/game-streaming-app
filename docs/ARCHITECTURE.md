# Architecture Overview

## System Components

### 1. Signaling Server (Node.js + WebSocket)
- WebRTC peer connection negotiation
- SDP (Session Description Protocol) exchange
- ICE candidate distribution
- Session management
- Authentication

### 2. TURN Server (Coturn)
- NAT traversal
- Relay for P2P connections
- UDP & TCP support

### 3. Host Application
- Game screen capture
- Hardware-accelerated video encoding (NVIDIA/AMD)
- WebRTC peer connection
- Input handling

### 4. Client Application (Web)
- WebRTC video playback
- Input forwarding
- Quality adaptation

## Data Flow

1. Host & Client connect to signaling server
2. Exchange SDP offers/answers
3. Exchange ICE candidates
4. Direct P2P connection established via WebRTC
5. Video stream flows over RTP (encrypted with DTLS/SRTP)
6. Input commands flow back from client to host

## Security

- DTLS encryption (WebRTC media)
- SRTP encryption (streams)
- JWT authentication
- TLS 1.3 (server communications)
