# EMS Portal Backend

Node.js Express backend for the EMS Portal using Prisma ORM and PostgreSQL.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your PostgreSQL credentials:
```
DATABASE_URL="postgresql://user:password@localhost:5432/ems_portal?schema=public"
PORT=5000
NODE_ENV=development
```

4. Generate Prisma client:
```bash
npm run prisma:generate
```

5. Run migrations:
```bash
npm run prisma:migrate
```

## Development

Start the development server:
```bash
npm run dev
```

Server will run on http://localhost:5000

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Create and run migrations
- `npm run prisma:studio` - Open Prisma Studio GUI

## Folder Structure

```
src/
├── routes/          # API routes
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
└── utils/          # Utility functions
prisma/
└── schema.prisma   # Database schema
```

## API Endpoints

- `GET /api/health` - Health check endpoint
