import React, { useState } from 'react';
import './App.css';

function App() {
  const [connected, setConnected] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [serverUrl, setServerUrl] = useState('http://localhost:8000');
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('Host');

  const handleConnect = async () => {
    try {
      const response = await fetch(`${serverUrl}/health`);
      if (response.ok) {
        setConnected(true);
        alert('Connected to server!');
      }
    } catch (error: any) {
      alert('Failed to connect: ' + error.message);
    }
  };

  const handleStartStreaming = async () => {
    if (!connected) {
      alert('Please connect to server first');
      return;
    }
    setStreaming(true);
    alert('Streaming started!');
  };

  const handleStopStreaming = () => {
    setStreaming(false);
    alert('Streaming stopped!');
  };

  return (
    <div className="app">
      <div className="header">
        <h1>🎮 Game Streaming Host</h1>
        <p>Stream your games to clients in real-time</p>
      </div>

      <div className="container">
        <div className="section">
          <h2>Server Configuration</h2>
          <div className="form-group">
            <label>Server URL</label>
            <input
              type="text"
              value={serverUrl}
              onChange={(e) => setServerUrl(e.target.value)}
              placeholder="http://localhost:8000"
            />
          </div>
          <button onClick={handleConnect} className={`btn ${connected ? 'btn-success' : 'btn-primary'}`}>
            {connected ? '✓ Connected' : 'Connect to Server'}
          </button>
        </div>

        <div className="section">
          <h2>Streaming Settings</h2>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Room ID</label>
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Enter or generate room ID"
            />
          </div>
          <button
            onClick={() => setRoomId(Math.random().toString(36).substr(2, 9))}
            className="btn btn-secondary"
          >
            Generate Room ID
          </button>
        </div>

        <div className="section">
          <h2>Stream Control</h2>
          {!streaming ? (
            <button onClick={handleStartStreaming} className="btn btn-success btn-large">
              🔴 Start Streaming
            </button>
          ) : (
            <button onClick={handleStopStreaming} className="btn btn-danger btn-large">
              ⏹️ Stop Streaming
            </button>
          )}
          {streaming && <p className="status">🔴 LIVE - Streaming in progress</p>}
        </div>

        <div className="section">
          <h2>Preview</h2>
          <div className="preview">
            {streaming ? (
              <p>Game screen will be captured here...</p>
            ) : (
              <p>Start streaming to see preview</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;