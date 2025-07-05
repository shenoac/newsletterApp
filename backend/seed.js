require("dotenv").config();
const mongoose = require("mongoose");
const { seedTestUsers } = require("./routes/auth");

async function main() {
  const mongoUri =
    process.env.MONGO_URI || "mongodb://localhost:27017/newsletter";
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDb connected");
    await seedTestUsers();
    console.log("users created");
  } catch (err) {
    console.error("Error seeding users:", err);
  } finally {
    await mongoose.disconnect();
    console.log("mongoDB disconnected");
  }
}
