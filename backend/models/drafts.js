const mongoose = require("mongoose");

const draftSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  data: { type: Object, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Draft", draftSchema);
