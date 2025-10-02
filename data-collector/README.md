# Data Collector Service

Node.js service for collecting MTG price data and tournament results.

## Setup

```bash
npm install
cp .env.example .env
# Edit .env with your API keys
```

## Running

```bash
npm start        # Production mode
npm run dev      # Development mode with auto-reload
```

## API Endpoints

### Price Data
- `GET /api/prices/:cardName` - Get current price for a card
- `GET /api/prices/:cardName/history` - Get price history
- `GET /api/prices` - Get cards with recent price changes

### Tournament Data
- `GET /api/tournaments/results` - Get recent tournament results
- `GET /api/tournaments/decklists/:tournamentId` - Get decklists
- `GET /api/tournaments/trending` - Get trending cards

## Architecture

```
src/
├── index.js              # Main server file
├── routes/               # API route handlers
│   ├── priceRoutes.js
│   └── tournamentRoutes.js
├── services/             # Business logic and external API integrations
│   ├── priceService.js
│   └── tournamentService.js
└── utils/                # Utility functions
```

## TODO

- [ ] Implement price fetching from MTG APIs (TCGPlayer, Scryfall, etc.)
- [ ] Implement tournament data scraping (MTGTop8, MTGGoldfish)
- [ ] Add data caching layer
- [ ] Add rate limiting for external APIs
- [ ] Add error handling and logging
- [ ] Add data persistence (database)
