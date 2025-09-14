# Comegle Backend

A TypeScript backend for Comegle — a college-restricted chat platform, with Express, Prisma, Swagger, Supabase, and seeding support.

---

## Features

- **Express** server in TypeScript
- **Prisma** ORM with PostgreSQL (hosted on Supabase)
- **Swagger** API documentation
- **CORS** support for frontend integration
- **Seeding** capability for initial college data

---

## Prerequisites

- Node.js >= 18
- npm
- PostgreSQL database (recommended: [Supabase](https://supabase.com/))
- [Prisma CLI](https://www.prisma.io/docs/reference/api-reference/command-reference#cli-commands) (installed as a dev dependency)

---

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/comegle-backend.git
cd comegle-backend
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in your Supabase/Postgres credentials:

```env
DATABASE_URL="postgresql://username:password@host:port/database"
```

### 3. Prisma Setup

Generate the Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev --name init
```

(Optional) View your DB in Prisma Studio:

```bash
npx prisma studio
```

### 4. Seed the Database

Seed initial college data (from `src/utils/seed.ts`):

```bash
npx ts-node src/utils/seed.ts
# or, if using the npm script:
npm run seed
```

### 5. Start the Development Server

```bash
npm run dev
```

The server will start (default: http://localhost:3000).

---

## API Documentation

Swagger UI is available at:  
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## Useful Commands

| Command                       | Description                                 |
|-------------------------------|---------------------------------------------|
| `npm run dev`                 | Run the server in development mode          |
| `npm run build`               | Build the project (TypeScript output in /build) |
| `npm start`                   | Start the server from compiled code         |
| `npx prisma generate`         | Generate Prisma client                      |
| `npx prisma migrate dev`      | Apply new migrations                        |
| `npx prisma studio`           | Open Prisma Studio (DB explorer)            |
| `npm run seed`                | Seed the database with initial data         |

---

## Project Structure

```
src/
│
├── index.ts        # Main Express server
├── utils/
│      └── seed.ts       # DB seeding script
├── swagger.ts      # Swagger API docs definition
prisma/
└── schema.prisma   # Prisma database schema
```

---

## Notes

- This backend is meant to be paired with the Comegle frontend.
- Make sure your database is accessible from your local machine or deployment environment.
- For production, consider environment variables for all secrets and use a process manager.

---

## License

MIT