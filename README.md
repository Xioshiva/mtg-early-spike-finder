# MTG Early Spike Finder

A microservices-based application to predict Magic: The Gathering card price spikes by analyzing price trends, tournament results, and play rates.

## Architecture

This project consists of three services:

1. **Data Collector** (Node.js) - Collects price data and tournament results
2. **Analysis Server** (Python) - Analyzes data to predict price spikes
3. **Frontend** (Next.js) - Displays insights and predictions

```
mtg-early-spike-finder/
├── data-collector/       # Node.js service for data collection
├── analysis-server/      # Python service for spike analysis
└── frontend/             # Next.js dashboard
```

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Python 3.12+
- Git

### Setup All Services

1. **Data Collector Service**
```bash
cd data-collector
npm install
cp .env.example .env
# Edit .env with your API keys
npm start
```
Service runs on http://localhost:3001

2. **Analysis Server**
```bash
cd analysis-server
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python app/main.py
```
Service runs on http://localhost:8000

3. **Frontend**
```bash
cd frontend
npm install
cp .env.local.example .env.local
# Edit .env.local with backend URLs
npm run dev
```
Service runs on http://localhost:3000

## Service Details

### Data Collector (Node.js)
- **Purpose**: Webscraper/API reader for MTG price data and tournament results
- **Tech**: Express.js, Axios
- **Endpoints**: 
  - `/api/prices` - Price data
  - `/api/tournaments` - Tournament data
- [See data-collector/README.md for details](./data-collector/README.md)

### Analysis Server (Python)
- **Purpose**: Analyze price spikes and play rate trends
- **Tech**: FastAPI, Pandas, NumPy
- **Endpoints**:
  - `/api/analyze` - Spike analysis
  - `/api/play-rates` - Play rate analysis
  - `/api/predictions` - Spike predictions
- [See analysis-server/README.md for details](./analysis-server/README.md)

### Frontend (Next.js)
- **Purpose**: Dashboard to visualize data and predictions
- **Tech**: Next.js 15, TypeScript, Tailwind CSS
- **Features**:
  - Price trends visualization
  - Tournament analysis
  - Spike predictions
- [See frontend/README.md for details](./frontend/README.md)

## Development Status

⚠️ **This is a boilerplate setup** - Core functionality is not yet implemented.

### TODO

#### Data Collector
- [ ] Implement MTG price API integrations (TCGPlayer, Scryfall)
- [ ] Implement tournament data scraping (MTGTop8, MTGGoldfish)
- [ ] Add data caching and persistence
- [ ] Add rate limiting

#### Analysis Server
- [ ] Implement spike detection algorithms
- [ ] Implement play rate analysis
- [ ] Add machine learning models
- [ ] Connect to data collector service

#### Frontend
- [ ] Connect to backend APIs
- [ ] Implement data visualization (charts)
- [ ] Add card search and filtering
- [ ] Add real-time updates

## Contributing

This is a personal project. Feel free to fork and customize for your own use.

## License

ISC
