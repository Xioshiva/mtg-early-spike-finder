# MTG Early Spike Finder - Frontend

Next.js frontend for displaying MTG card price trends, tournament analysis, and spike predictions.

## Getting Started

### Setup

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local
# Edit .env.local with your backend API URLs
```

### Running

```bash
npm run dev     # Development mode
npm run build   # Production build
npm start       # Production mode
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### Dashboard Overview
- Price trends visualization
- Tournament analysis
- Spike predictions

### Components
- `CardList.tsx` - Display list of cards with prices and spike probabilities
- `PriceChart.tsx` - Chart component for price history
- `TournamentTrends.tsx` - Display recent tournament results

## Architecture

```
app/
├── page.tsx              # Main dashboard page
├── layout.tsx            # Root layout
└── globals.css           # Global styles

components/
├── CardList.tsx          # Card listing component
├── PriceChart.tsx        # Price chart component
└── TournamentTrends.tsx  # Tournament data component
```

## TODO

- [ ] Connect to data-collector API
- [ ] Connect to analysis-server API
- [ ] Implement real-time data fetching
- [ ] Add chart library (recharts/chart.js)
- [ ] Add card search functionality
- [ ] Add filtering and sorting
- [ ] Add responsive design improvements
- [ ] Add loading states and error handling
- [ ] Add card detail pages
- [ ] Add authentication (optional)

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
