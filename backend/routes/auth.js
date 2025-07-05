const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secret-keelworks";

router.post("/login", async (req, res) => {
  console.log("a");
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid Credentials" });
  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(401).json({ error: "Invalid Credentials" });

  const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });
  res.json({ token, email: user.email });
});

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = header.slice(7);
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
}

router.post("/users", authMiddleware, async (req, res) => {
  const { email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing)
    return res.status(400).json({ error: "User with EmailId already exists" });
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, passwordHash });
  res.status(201).json({ id: user._id, email: user.email });
});

router.post("/change-password", authMiddleware, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user.userId);
  if (!user) return res.status(404).json({ error: "User not found" });
  const match = await bcrypt.compare(currentPassword, user.passwordHash);
  if (!match)
    return res.status(400).json({ error: "Current password incorrect" });
  user.passwordHash = await bcrypt.hash(newPassword, 10);
  await user.save();
  res.json({ message: "Password updated" });
});

async function seedTestUsers() {
  console.log("creating users");
  const testAccounts = [
    { email: "jay.patel@keelworks.org", password: "test@123" },
    { email: "test@gmail.com", password: "test" },
  ];

  for (const { email, password } of testAccounts) {
    const exists = await User.findOne({ email });
    if (!exists) {
      const passwordHash = await bcrypt.hash(password, 10);
      await User.create({ email, passwordHash });
      console.log(`Seeded user ${email}`);
    }
  }
}

module.exports = {
  router,
  authMiddleware,
  seedTestUsers,
};
