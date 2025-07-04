const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  openCount: { type: Number, default: 0 },
  opens: [{ time: { type: Date, default: Date.now }, userAgent: String }],
});

module.exports = mongoose.model("Analytics", analyticsSchema);
