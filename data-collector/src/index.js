import express from 'express';
import dotenv from 'dotenv';
import priceRoutes from './routes/priceRoutes.js';
import tournamentRoutes from './routes/tournamentRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'MTG Data Collector Service',
    version: '1.0.0',
    endpoints: {
      prices: '/api/prices',
      tournaments: '/api/tournaments'
    }
  });
});

app.use('/api/prices', priceRoutes);
app.use('/api/tournaments', tournamentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Data Collector service running on port ${PORT}`);
});
