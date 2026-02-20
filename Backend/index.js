import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

/* =======================
   GLOBAL MIDDLEWARES
======================= */

// Parse JSON & form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// ✅ CORRECT CORS CONFIG (IMPORTANT)
app.use(
  cors({
    origin: true,        // allows ALL Vercel preview + prod domains
    credentials: true,   // allows cookies / auth
  })
);

/* =======================
   API ROUTES
======================= */

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

/* =======================
   SERVER START
======================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});