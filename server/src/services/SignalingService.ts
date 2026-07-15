import { Server as SocketIOServer, Socket } from 'socket.io';
import logger from '../utils/logger';
import { v4 as uuidv4 } from 'uuid';

interface PeerConnection {
  id: string;
  socketId: string;
  username: string;
  role: 'host' | 'client';
  iceServers: any[];
}

export class SignalingService {
  private io: SocketIOServer;
  private peers: Map<string, PeerConnection> = new Map();
  private rooms: Map<string, Set<string>> = new Map();

  constructor(io: SocketIOServer) {
    this.io = io;
  }

  initialize(): void {
    this.io.on('connection', (socket: Socket) => {
      logger.info(`✅ Client connected: ${socket.id}`);

      socket.on('join-room', (data: any) => this.handleJoinRoom(socket, data));
      socket.on('offer', (data: any) => this.handleOffer(socket, data));
      socket.on('answer', (data: any) => this.handleAnswer(socket, data));
      socket.on('ice-candidate', (data: any) => this.handleIceCandidate(socket, data));
      socket.on('disconnect', () => this.handleDisconnect(socket));
    });
  }

  private handleJoinRoom(socket: Socket, data: any): void {
    const { roomId, username, role } = data;
    if (!roomId || !username || !role) {
      socket.emit('error', { message: 'Missing required fields' });
      return;
    }

    const peerId = uuidv4();
    const peer: PeerConnection = {
      id: peerId,
      socketId: socket.id,
      username,
      role,
      iceServers: this.getIceServers(),
    };

    this.peers.set(socket.id, peer);
    if (!this.rooms.has(roomId)) this.rooms.set(roomId, new Set());
    this.rooms.get(roomId)!.add(socket.id);
    socket.join(roomId);

    logger.info(`👤 ${username} (${role}) joined room ${roomId}`);
    socket.to(roomId).emit('peer-joined', { peerId, username, role });

    const existingPeers = Array.from(this.rooms.get(roomId)!)
      .filter((id) => id !== socket.id)
      .map((id) => {
        const p = this.peers.get(id);
        return { peerId: p?.id, username: p?.username, role: p?.role };
      });

    socket.emit('existing-peers', existingPeers);
  }

  private handleOffer(socket: Socket, data: any): void {
    socket.broadcast.emit('offer', { sourcePeerId: this.peers.get(socket.id)?.id, ...data });
  }

  private handleAnswer(socket: Socket, data: any): void {
    socket.broadcast.emit('answer', { sourcePeerId: this.peers.get(socket.id)?.id, ...data });
  }

  private handleIceCandidate(socket: Socket, data: any): void {
    socket.broadcast.emit('ice-candidate', { sourcePeerId: this.peers.get(socket.id)?.id, ...data });
  }

  private handleDisconnect(socket: Socket): void {
    const peer = this.peers.get(socket.id);
    if (peer) {
      logger.info(`👋 ${peer.username} disconnected`);
      this.peers.delete(socket.id);
      socket.broadcast.emit('peer-left', { peerId: peer.id });
    }
  }

  private getIceServers(): any[] {
    return [
      { urls: ['stun:stun.l.google.com:19302'] },
      { urls: ['stun:stun1.l.google.com:19302'] },
    ];
  }
}
