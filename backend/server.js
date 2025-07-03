require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const draftRouter = require("./routes/drafts");
const analyticsRouter = require("./routes/analytics");
// const authRouter = require("./routes/auth");
const {
  router: authRouter,
  seedTestUsers,
  authMiddleware,
} = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRouter);
app.use("/api/drafts", authMiddleware, draftRouter);
app.use("/api/analytics", analyticsRouter);

const mongoUri = process.env.MONGO_URI || "mongodb://mongo:27017/newsletter";
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("mongoDB connected");
    await seedTestUsers();
  })
  .catch((err) => {
    console.error("Mongo connecttion error:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("API listening on port ${PORT}"));
