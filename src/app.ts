import express, { Application } from 'express';
import cors from 'cors';
import podcastRoutes from './routes/podcasts';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/podcasts', podcastRoutes);

export default app;
