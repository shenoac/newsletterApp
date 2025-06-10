const express = require("express");
const router = express.Router();
const Draft = require("../models/drafts");

router.get("/", async (req, res) => {
  const drafts = await Draft.find().sort({ updatedAt: -1 });
  res.json(drafts);
});

router.post("/", async (req, res) => {
  const { key, data } = req.body;
  const draft = await Draft.findOneAndUpdate(
    { key },
    { data, updatedAt: Date.now() },
    { upsert: true, new: true }
  );
  res.json(draft);
});

router.get("/:key", async (req, res) => {
  const draft = await Draft.findOne({ key: req.params.key });
  if (!draft) return res.status(404).json({ error: "Not found" });
  res.json(draft);
});

router.delete("/:key", async (req, res) => {
  await Draft.deleteOne({ key: req.params.key });
  res.sendStatus(204);
});

module.exports = router;
