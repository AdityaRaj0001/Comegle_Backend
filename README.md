# Comegle_Backend

This repository contains the backend for the Comegle platform. It is built with Node.js and uses PostgreSQL as its database. Follow the steps below to set up the backend on your local machine.

## Project Structure

```text
.
├── .gitignore
├── package.json
├── prisma/
├── src/
├── tsconfig.json
├── vercel.json
└── README.md
```

- **prisma/**: Contains Prisma schema and migration files for database management.
- **src/**: Contains the source code for the backend application.
- **package.json**: Project metadata and dependencies.
- **tsconfig.json**: TypeScript configuration.
- **vercel.json**: Vercel deployment configuration.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (if running locally, otherwise use your own connection string)
- [Git](https://git-scm.com/)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AdityaRaj0001/Comegle_Backend.git
cd Comegle_Backend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Create a `.env` File

Create a `.env` file in the root of your project and add the following environment variables:

```env
DATABASE_URL="your_postgres_database_url"
PORT=3000
NODE_ENV=development
GOOGLE_CLIENT_ID=
# GOOGLE_CLIENT_SECRET=
CLIENT_URL=http://localhost:5173
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
```

**Note:**  
- Replace `DATABASE_URL` with your own PostgreSQL connection string.
- Replace `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `ACCESS_TOKEN_SECRET`, and `REFRESH_TOKEN_SECRET` with your actual credentials.
- Never share your real secrets publicly.

### 4. Run Database Migrations (if using Prisma)

If the project uses [Prisma](https://www.prisma.io/):

```bash
npx prisma migrate dev
```

### 5. Start the Server

```bash
npm start
# or
yarn start
```

The server should now be running on `http://localhost:3000` (or the port specified in your `.env`).

## Additional Notes

- The backend expects the frontend to be running at the URL specified in `CLIENT_URL`.
- Make sure your PostgreSQL database is accessible using the connection string in `DATABASE_URL`.
- You may want to set up OAuth credentials for Google authentication if required.

## Troubleshooting

- Ensure all required environment variables are set.
- If you encounter database connection errors, verify your connection string and database status.
- Check the project documentation or open an issue if you need help.

## License

This project is licensed under the MIT License.
