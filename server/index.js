// index.js

// Import necessary modules
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";


require('dotenv').config();
// Load environment variables
config();

// Now you can use your environment variables
const port = process.env.PORT;
const connectionString = process.env.CONNECTION_URL;
const secret = process.env.JWT_SECRET;

// Connect to the database
connectDB();

// Set up express
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Set up routes
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
