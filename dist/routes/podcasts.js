"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Mock data for testing
const mockRecommendations = [
    { id: 1, title: "TechTalks", category: "Technology", description: "Tech trends and news" },
    { id: 2, title: "Comedy Hour", category: "Comedy", description: "Laugh-out-loud moments" },
];
// Route for recommendations
router.get('/recommendations', (req, res) => {
    res.json(mockRecommendations);
});
// Route for searching podcasts
router.get('/search', (req, res) => {
    const { query } = req.query;
    const results = mockRecommendations.filter((podcast) => podcast.title.toLowerCase().includes(query.toLowerCase()));
    res.json(results);
});
exports.default = router;
