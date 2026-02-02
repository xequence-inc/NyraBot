# Nyra (v2.0)

> **Modular, Powerful, Next-Gen Discord Bot.**  
> Built with Oceanic.js, TypeScript, and Next.js.

## 🌟 Features

- **Modular Architecture**: Only enable what you need.
- **Web Dashboard**: Manage your server from a beautiful UI.
- **Zero Lag**: Built on lightweight Oceanic.js.
- **Strict Typing**: Full TypeScript support to prevent runtime errors.

## 🚀 Quick Start

### Prerequisites

- Node.js v18+
- MongoDB Database
- Discord Bot Token

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/slaylish/NyraBot.git
   cd NyraBot
   ```

2. Install dependencies:

   ```bash
   npm install
   cd web && npm install
   ```

3. Configure Environment:
   Create a `.env` file in the root:

   ```env
   BOT_TOKEN=your_token_here
   MONGO_URI=your_mongo_uri
   ```

   Create a `.env.local` file in `web/`:

   ```env
   DISCORD_CLIENT_ID=...
   DISCORD_CLIENT_SECRET=...
   NEXTAUTH_SECRET=...
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run everything:
   ```bash
   # Builds the bot and web, then starts them based on build status
   npm start
   ```

## 📂 Project Structure

```
/
├── src/                # Bot Source Code
│   ├── core/           # Client, Handler, Types
│   └── modules/        # Features (Utility, Greeter, etc.)
├── web/                # Next.js Dashboard
│   ├── app/            # App Router Pages
│   └── public/         # Static Assets
├── docs/               # Documentation
└── launcher.js         # Process Manager
```

## 🤝 Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit changes (`git commit -m 'Add amazing feature'`).
4. Push to branch (`git push origin feature/amazing-feature`).
5. Open a PR.

## 📄 License

MIT © 2026 Nyra Team.
