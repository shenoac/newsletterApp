require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const draftRouter = require("./routes/drafts");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/drafts", draftRouter);

const mongoUri = process.env.MONGO_URI || "mongodb://mongo:27017/newsletter";
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("Mongo connecttion error:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("API listening on port ${PORT}"));
