import express from 'express';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './utils/logger';
import { SignalingService } from './services/SignalingService';

dotenv.config();

const app = express();
const httpServer = http.createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

const signalingService = new SignalingService(io);
signalingService.initialize();

httpServer.listen(PORT, () => {
  logger.info(`🎮 Game Streaming Server running on port ${PORT}`);
});

export { app, httpServer, io };
