const express = require("express");
const Analytics = require("../models/analytics");

const router = express.Router();

// 1x1 transparent pixel/
const pixelBuffer = Buffer.from(
  "R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
  "base64"
);

function parseClient(ua = "") {
  const lower = ua.toLowerCase();
  if (lower.includes("gmail")) return "Gmail";
  if (lower.includes("outlook")) return "Outlook";
  if (lower.includes("apple")) return "Apple Mail";
  if (lower.includes("yahoo")) return "Yahoo Mail";
  return "Unknown";
}

router.get("/open/:key.png", async (req, res) => {
  const { key } = req.params;
  const userAgent = req.get("User-Agent") || "unknown";
  const clientTime = req.query.clientTime
    ? new Date(req.query.clientTime)
    : undefined;
  await Analytics.findOneAndUpdate(
    { key },
    {
      $inc: { openCount: 1 },
      $push: {
        opens: {
          time: new Date(),
          userAgent,
          emailClient: parseClient(userAgent),
          clientTime,
        },
      },
    },
    { upsert: true }
  );
  res.set("Content-Type", "image/gif");
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  res.send(pixelBuffer);
});

router.post("/time/:key", async (req, res) => {
  const { key } = req.params;
  const { secondsSpent, clientTime } = req.body || {};
  const userAgent = req.headers["user-agent"] || "unknown";
  await Analytics.findOneAndUpdate(
    { key },
    {
      $push: {
        opens: {
          time: new Date(),
          userAgent,
          emailClient: parseClient(userAgent),
          clientTime: clientTime ? new Date(clientTime) : undefined,
          secondsSpent: Number(secondsSpent) || 0,
          isPing: false,
        },
      },
    },
    { upsert: true }
  );
  res.sendStatus(204);
});

router.get("/ping/:key.png", async (req, res) => {
  const { key } = req.params;
  const userAgent = req.headers["user-agent"] || "unknown";
  const clientTime = req.query.clientTime
    ? new Date(req.query.clientTime)
    : undefined;
  await Analytics.findOneAndUpdate(
    { key },
    {
      $push: {
        opens: {
          time: new Date(),
          userAgent,
          emailClient: parseClient(userAgent),
          clientTime,
          isPing: true,
        },
      },
    },
    { upsert: true }
  );
  res.set("Content-Type", "image/gif");
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
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
