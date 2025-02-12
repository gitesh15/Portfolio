// server.js
require("dotenv").config(); // Load .env file

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Create an Express app
const app = express();
const port = 3001; // Backend port

// Middleware
app.use(cors()); // Enable CORS for React frontend
app.use(bodyParser.json()); // Parse incoming JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// MongoDB connection using the URI from the .env file
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Create a Mongoose schema and model for contact data
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// API endpoint to handle form submission
app.post("/get-form-data", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact document in the database
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact data to the database
    await newContact.save();

    // Respond to the client
    res.status(200).json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while submitting the form.",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
