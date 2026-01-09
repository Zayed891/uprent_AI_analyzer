# Uprent AI Analyzer - Founding Engineer Application

**[Live Demo](https://uprent-ai-analyzer.vercel.app/)**

This is a prototype feature I built for Uprent to help landlords prioritize tenant applications automatically, scoring urgency and providing AI-generated insights.

## The Problem

Landlords manually review dozens of rental applications with no clear prioritization system. This leads to delayed decisions and missed opportunities with qualified tenants.

## The Solution

This prototype shows how AI can streamline the review process:
- **Smart Scoring:** Analyzes application signals to calculate urgency scores
- **AI Insights:** Uses GPT-4o-mini to generate reason for urgency and potential risks
- **Fast Decisions:** Ranks and prioritizes the top 3 applications, cutting review time significantly

## Demo Features

- Upload rental applications (JSON format)
- Automatic urgency calculation per application
- AI-powered explanation of why each application matters
- Risk assessment for delayed responses
- Sorted, prioritized results ready for action

## Architecture

Built as a modern full-stack prototype to show:
- **Frontend excellence:** React + TypeScript for scalable, maintainable UI
- **Backend reliability:** Node/Express with clean architecture and error handling
- **AI integration:** Seamless LLM integration with OpenRouter API
- **DevOps maturity:** Full CI/CD pipeline with Vercel and Render deployment

## Quick Start

Want to see it in action? Visit [https://uprent-ai-analyzer.vercel.app/]

To run locally:

1. Clone and install:
```bash
cd frontend && npm install
cd ../backend && npm install
```

2. Add your OpenRouter API key to `backend/.env`:
```
OPEN_ROUTER_API_KEY=your_key_here
PORT=3000
```

3. Run both services:
```bash
# Terminal 1 - Frontend
cd frontend && npm run dev

# Terminal 2 - Backend
cd backend && node index.js
```

## Project Structure

```
uprent_AI_analyzer/
├── frontend/          # React app
│   └── src/
│       ├── components/
│       ├── pages/
│       └── api/
├── backend/           # Node/Express server
│   ├── index.js
│   └── services/
└── README.md
```

## Deployment

- **Frontend:** Deployed on Vercel (auto-deploys on push to main)
- **Backend:** Deployed on Render (auto-deploys on push to main)

The frontend automatically connects to the live backend API.

## Environment Variables

**Backend (.env file)**
- `OPEN_ROUTER_API_KEY` - Your API key for GPT-4o-mini
- `PORT` - Server port (default: 3000)

## How It Works

1. Currently it works using mock Data.
2. Backend calculates urgency score per application based on the Data
3. AI generates insights on why each application matters
4. Results ranked and prioritized for quick decisions

---

Built to show what I can bring to Uprent as a founding engineer. Let's build something great together.

**Check it out:** https://uprent-ai-analyzer.vercel.app/

