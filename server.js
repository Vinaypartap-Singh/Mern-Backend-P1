const express = require("express");
const router = require("./router/auth-router");
const connectDB = require("./utils/db");
const ContactRouter = require("./router/contact-router");
const ServiceRouter = require("./router/service-router");
const cors = require("cors");

const app = express();
// To Tackle Cors Error
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
// Middleware

app.use(express.json());

// Middleware for routes

app.use("/api/auth", router);
app.use("/api/form", ContactRouter);
app.use("/api/data", ServiceRouter);

const PORT = 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
