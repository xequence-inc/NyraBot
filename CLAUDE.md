# Project: NyraBot Monolith

## Overview

A monolithic application combining a Next.js 14 Dashboard and a Discord.js v14 Bot in a single repo, running concurrently.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), Tailwind CSS v3, Framer Motion
- **Backend/Bot**: Discord.js v14, Mongoose (MongoDB)
- **Icons**: Inline SVG (mage-icons-react installed but using inline for reliability)
- **Font**: Outfit (via next/font/google with CSS variable `--font-outfit`)
- **Language**: TypeScript

## Architecture

- **Run Command**: `npm start` uses `concurrently` to launch:
  1. `next start -p 3498` (Web Dashboard)
  2. `tsx watch src/bot/index.ts` (Discord Bot)
- **Database**: MongoDB Atlas. Models in `src/bot/models`

## Routes

| Path                                       | Description                                       |
| ------------------------------------------ | ------------------------------------------------- |
| `/`                                        | Landing page (premium glass morphism design)      |
| `/login`                                   | Discord OAuth login                               |
| `/premium`                                 | Pricing tiers                                     |
| `/dashboard`                               | Server selector (fetches from `/api/auth/guilds`) |
| `/dashboard/[guildId]/moderation`          | Sentry HUD                                        |
| `/dashboard/[guildId]/moderation/logs`     | Infraction history                                |
| `/dashboard/[guildId]/moderation/automod`  | Auto-mod config                                   |
| `/dashboard/[guildId]/moderation/scaling`  | Punishment ladders                                |
| `/dashboard/[guildId]/moderation/settings` | Module settings                                   |

## Key Files

- `src/app/layout.tsx` — Root layout with Outfit font
- `src/app/globals.css` — Tailwind base + glass/glow utilities
- `tailwind.config.js` — Theme config with animations
- `src/bot/index.ts` — Bot entry point
- `src/bot/commands.ts` — Slash command definitions
- `src/bot/models/Infraction.ts` — Mongoose schema

## Environment Variables (.env)

```
PORT=3498
MONGO_URI=mongodb+srv://...
DISCORD_TOKEN=...
DISCORD_CLIENT_ID=...
DISCORD_CLIENT_SECRET=...
DISCORD_REDIRECT_URI=http://localhost:3498/api/auth/callback
NEXTAUTH_URL=http://localhost:3498
NEXTAUTH_SECRET=...
```

## Style System

- **Colors**: background (#030305), surface (#0a0a0f), card (#111116), primary (#8b5cf6), secondary (#06b6d4), accent (#f43f5e)
- **Utilities**: `.glass` (frosted glass effect), `.glow` / `.glow-sm` (purple box shadow), `.text-gradient` (animated gradient text)
- **Animations**: `animate-gradient`, `animate-float`, `animate-pulse-glow`

## TODO

1. Wire up `/api/auth/discord` OAuth flow
2. Create `/api/auth/guilds` endpoint to fetch user's Discord servers
3. Connect dashboard to real MongoDB data instead of placeholders
4. Register bot slash commands on startup (currently in code but may need deployment)

## Commands

- `npm run dev` — Development mode (hot reload)
- `npm run build` — Production build
- `npm start` — Production server + bot
