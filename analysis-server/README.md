# Analysis Server

Python FastAPI service for analyzing MTG card price spikes and play rate trends.

## Setup

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup environment
cp .env.example .env
```

## Running

```bash
# Development mode
python app/main.py

# Or with uvicorn
uvicorn app.main:app --reload --port 8000
```

## API Endpoints

### Analysis
- `GET /api/analyze/:cardName` - Analyze a card for spike potential
- `POST /api/analyze/batch` - Analyze multiple cards at once
- `GET /api/predictions` - Get cards most likely to spike

### Play Rates
- `GET /api/play-rates/:cardName` - Get play rate trends for a card

## Architecture

```
app/
├── main.py           # FastAPI application and routes
├── analysis.py       # Spike analysis algorithms
├── play_rate.py      # Play rate analysis functions
└── __init__.py       # Package initialization
```

## TODO

- [ ] Implement spike detection algorithms
- [ ] Implement play rate analysis
- [ ] Add machine learning models for predictions
- [ ] Integrate with data-collector service
- [ ] Add data preprocessing pipelines
- [ ] Add statistical analysis tools
- [ ] Add caching for analysis results
- [ ] Add comprehensive logging
