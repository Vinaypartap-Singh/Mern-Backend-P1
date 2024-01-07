const mongoose = require("mongoose");

const URI = "mongodb+srv://vinay:vinay@cluster0.rgs83cr.mongodb.net/adminpanel";

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successful To MongoDB");
  } catch (error) {
    console.log("Connection Failed");
    process.exit();
  }
};

module.exports = connectDB;
