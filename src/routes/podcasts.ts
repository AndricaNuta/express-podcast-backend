import { Router, Request, Response } from 'express';
import { mockRecommendations } from './mockRecommendations';

const router = Router();

// Route for recommendations
router.get('/recommendations', (req: Request, res: Response) => {
  res.json(mockRecommendations);
});

// Route for searching podcasts
router.get('/search', (req: Request, res: Response) => {
  const { query } = req.query as { query: string };
  const results = mockRecommendations.filter((podcast) =>
    podcast.title.toLowerCase().includes(query.toLowerCase())
  );
  res.json(results);
});

export default router;
