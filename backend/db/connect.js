const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;
const { populateDatabase, populateCarsDatabase } = require("../utils/utils");

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    populateDatabase();
    populateCarsDatabase();
    console.log("connected to DB!");
  } catch (error) {
    console.log("failed to connect to DB");
  }
};

module.exports = connectDB;
