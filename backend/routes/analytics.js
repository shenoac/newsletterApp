const express = require("express");
const Analytics = require("../models/analytics");

const router = express.Router();

// 1x1 transparent pixel/
const pixelBuffer = Buffer.from(
  "R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
  "base64"
);

router.get("/open/:key.png", async (req, res) => {
  const { key } = req.params;
  const userAgent = req.headers["user-agent"] || "unknown";
  await Analytics.findOneAndUpdate(
    { key },
    {
      $inc: { openCount: 1 },
      $push: { opens: { time: new Date(), userAgent } },
    },
    { upsert: true }
  );
  res.set("Content-Type", "image/gif");
  res.send(pixelBuffer);
});

router.get("/stats/:key", async (req, res) => {
  const { key } = req.params;
  const doc = await Analytics.findOne({ key }).lean();
  if (!doc) return res.json({ openCount: 0, opens: [] });
  res.json({
    openCount: doc.openCount,
    opens: doc.opens || [],
  });
});

module.exports = router;
