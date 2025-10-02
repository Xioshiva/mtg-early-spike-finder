# MTG Early Spike Finder - Setup Guide

## What Was Created

This boilerplate setup includes three microservices for detecting MTG card price spikes:

### 1. Data Collector Service (Node.js)
**Location**: `data-collector/`
**Port**: 3001

A Node.js Express server that will collect MTG price data and tournament information.

**Key Files**:
- `src/index.js` - Main server file
- `src/routes/priceRoutes.js` - Price data endpoints
- `src/routes/tournamentRoutes.js` - Tournament data endpoints
- `src/services/priceService.js` - Price fetching logic (to be implemented)
- `src/services/tournamentService.js` - Tournament scraping logic (to be implemented)

**API Endpoints**:
- `GET /api/prices/:cardName` - Get current price for a card
- `GET /api/prices/:cardName/history` - Get price history
- `GET /api/prices` - Get cards with recent price changes
- `GET /api/tournaments/results` - Get recent tournament results
- `GET /api/tournaments/decklists/:tournamentId` - Get tournament decklists
- `GET /api/tournaments/trending` - Get trending cards

**To Run**:
```bash
cd data-collector
npm install
cp .env.example .env
npm start
```

### 2. Analysis Server (Python)
**Location**: `analysis-server/`
**Port**: 8000

A Python FastAPI server that will analyze the collected data to predict price spikes.

**Key Files**:
- `app/main.py` - FastAPI application and routes
- `app/analysis.py` - Spike detection algorithms (to be implemented)
- `app/play_rate.py` - Play rate analysis (to be implemented)

**API Endpoints**:
- `GET /api/analyze/:cardName` - Analyze a card for spike potential
- `POST /api/analyze/batch` - Analyze multiple cards
- `GET /api/play-rates/:cardName` - Get play rate trends
- `GET /api/predictions` - Get cards most likely to spike

**To Run**:
```bash
cd analysis-server
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python app/main.py
```

### 3. Frontend (Next.js)
**Location**: `frontend/`
**Port**: 3000

A Next.js dashboard to visualize the data and predictions.

**Key Files**:
- `app/page.tsx` - Main dashboard page
- `components/CardList.tsx` - Display card list with prices
- `components/PriceChart.tsx` - Price history chart component
- `components/TournamentTrends.tsx` - Tournament data component

**To Run**:
```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

## Quick Start with Docker

If you have Docker installed, you can run all services at once:

```bash
docker-compose up
```

This will start:
- Data Collector at http://localhost:3001
- Analysis Server at http://localhost:8000
- Frontend at http://localhost:3000

## Next Steps for Implementation

### Data Collector
1. **Implement Price Fetching**:
   - Add Scryfall API integration (free, no key required)
   - Add TCGPlayer API integration (requires API key)
   - Add CardKingdom scraper (if needed)
   
2. **Implement Tournament Data Collection**:
   - Add MTGTop8 scraper
   - Add MTGGoldfish API/scraper
   - Add tournament aggregation logic

3. **Add Data Persistence**:
   - Set up database (MongoDB, PostgreSQL, etc.)
   - Create data models
   - Add caching layer (Redis)

### Analysis Server
1. **Implement Spike Detection**:
   - Price trend analysis algorithms
   - Anomaly detection
   - Statistical models
   
2. **Implement Play Rate Analysis**:
   - Calculate play rate changes
   - Correlate with price changes
   - Identify trending cards

3. **Add Machine Learning**:
   - Train prediction models
   - Feature engineering
   - Model evaluation and tuning

### Frontend
1. **Connect to Backend APIs**:
   - Implement API client functions
   - Add error handling
   - Add loading states

2. **Add Data Visualization**:
   - Install chart library (recharts or chart.js)
   - Implement price history charts
   - Add play rate visualizations

3. **Add Features**:
   - Card search functionality
   - Filtering and sorting
   - Card detail pages
   - Real-time updates

## Environment Variables

### Data Collector (.env)
```
PORT=3001
# Add your API keys:
# TCGPLAYER_API_KEY=your_key
# SCRYFALL_API_KEY=your_key (if needed)
```

### Analysis Server (.env)
```
PORT=8000
DATA_COLLECTOR_URL=http://localhost:3001
# SPIKE_THRESHOLD=0.20
# CONFIDENCE_LEVEL=0.75
```

### Frontend (.env.local)
```
NEXT_PUBLIC_DATA_COLLECTOR_URL=http://localhost:3001
NEXT_PUBLIC_ANALYSIS_SERVER_URL=http://localhost:8000
```

## Recommended API Sources

### Price Data
- **Scryfall API** (https://scryfall.com/docs/api) - Free, comprehensive MTG data
- **TCGPlayer API** (https://docs.tcgplayer.com/) - Requires API key, good for prices
- **CardKingdom** - May require scraping

### Tournament Data
- **MTGTop8** (https://www.mtgtop8.com/) - Tournament results (scraping required)
- **MTGGoldfish** (https://www.mtggoldfish.com/) - Metagame and prices
- **MTGO Challenge Results** - Official tournament data

## Project Structure

```
mtg-early-spike-finder/
├── data-collector/          # Node.js data collection service
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── utils/          # Helper functions
│   ├── Dockerfile
│   └── package.json
├── analysis-server/         # Python analysis service
│   ├── app/
│   │   ├── main.py         # FastAPI app
│   │   ├── analysis.py     # Analysis algorithms
│   │   └── play_rate.py    # Play rate analysis
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/                # Next.js frontend
│   ├── app/                # Next.js app router
│   ├── components/         # React components
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml       # Docker orchestration
├── .gitignore              # Git ignore rules
└── README.md               # Main documentation
```

## Testing the Boilerplate

All three services have been tested and are working. You can verify by:

1. Start each service (or use docker-compose)
2. Visit the frontend at http://localhost:3000
3. Test API endpoints:
   - Data Collector: http://localhost:3001/api/prices/black-lotus
   - Analysis Server: http://localhost:8000/api/predictions

## Tips for Development

1. **Start Simple**: Begin by implementing one feature at a time
2. **Use Free APIs First**: Scryfall API is free and very comprehensive
3. **Test Frequently**: Run each service as you develop
4. **Version Control**: Commit changes regularly
5. **Documentation**: Update README files as you add features

## Common Issues

### Port Already in Use
If a port is already taken, change the PORT in the .env file.

### Python Virtual Environment
Always activate the virtual environment before running the Python server:
```bash
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

### Node Modules
If you encounter issues, try deleting node_modules and reinstalling:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Support

This is a boilerplate/starter kit. You'll need to implement the core functionality yourself. Each service has TODO comments indicating where to add your implementation.

Good luck building your MTG spike finder!
