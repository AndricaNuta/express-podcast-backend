## express-podcast-backend – API for PodcastApp (WIP)

This repository contains the **Node.js / Express backend**, written in **TypeScript**, for my
PodcastApp React Native client.

The goal is to model a realistic API layer: clean routing, typed handlers, and a structure that
can later swap mock data for a real podcast provider.

### What’s implemented so far

- **Express + TypeScript setup**
  - `src/app.ts` bootstraps an `express()` application using TypeScript
  - `express.json()` middleware for JSON request/response handling
  - `cors()` enabled so the mobile app can talk to the API during local development

- **Modular routing**
  - `src/routes/podcasts.ts` defines podcast-related routes behind `/podcasts`
  - Clear separation of concerns: app wiring vs. feature routes

- **Podcast endpoints**
  - `GET /podcasts/recommendations`  
    Returns a list of recommended podcasts from `mockRecommendations`
  - `GET /podcasts/search?query=...`  
    Simple search over mock data, filtering by title

- **Mock data for fast iteration**
  - `mockRecommendations` lets me iterate on the mobile UX and API contract
    without depending on an external provider yet
  - Easy to swap later with a real data source or third-party API
