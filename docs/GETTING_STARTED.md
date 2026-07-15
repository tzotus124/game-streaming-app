# Getting Started Guide

## Prerequisites

- Docker & Docker Compose
- Node.js 18+
- Git

## Quick Start

```bash
git clone https://github.com/tzotus124/game-streaming-app.git
cd game-streaming-app

cp .env.example .env

docker-compose up -d
```

## Verify Installation

```bash
curl http://localhost:8000/health
```

## Services

- **Signaling Server:** http://localhost:8000
- **PostgreSQL:** localhost:5432
- **Redis:** localhost:6379
- **TURN Server:** 3478 (UDP/TCP), 5349 (TLS)
- **Prometheus:** http://localhost:9090
