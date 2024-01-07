const express = require("express");
const router = require("./router/auth-router");
const connectDB = require("./utils/db");
const ContactRouter = require("./router/contact-router");

const app = express();

// Middleware

app.use(express.json());

// Middleware for routes

app.use("/api/auth", router);
app.use("/api/form", ContactRouter);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
