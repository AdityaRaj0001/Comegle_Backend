import express from "express";
import { corsOptions } from "./config/cors";
import swaggerUi from "swagger-ui-express";

import { PORT } from "./config/env";
import routes from "./routes";
import swaggerDocument from "./swagger";

import cookieParser from "cookie-parser";


const app = express();

// ✅ Allowed origins
app.use(corsOptions);

app.use(cookieParser());

app.use(express.json());

// API Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api/v1", routes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
