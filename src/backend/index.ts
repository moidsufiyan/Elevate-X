import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // Load environment variables

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit the process with failure
  });

// Define Mentor Schema and Model
const mentorSchema = new mongoose.Schema({
  name: String,
  role: String,
  expertise: [String],
  company: String,
  bio: String,
  avatar: String,
  rating: Number,
  reviews: Number,
  sessions: Number,
  availability: [String],
  hourlyRate: Number,
  featured: Boolean,
});

const Mentor = mongoose.model("Mentor", mentorSchema);

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route to get all mentors
app.get("/mentors", async (req, res) => {
  try {
    const mentors = await Mentor.find(); // Fetch all mentors from the database
    res.json(mentors);
  } catch (error) {
    console.error("Error fetching mentors:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to get a mentor by ID
app.get("/mentors/:id", async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id); // Fetch mentor by ID
    if (mentor) {
      res.json(mentor);
    } else {
      res.status(404).send("Mentor not found");
    }
  } catch (error) {
    console.error("Error fetching mentor by ID:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Default route for undefined endpoints
app.use((req, res) => {
  res.status(404).send("Endpoint not found");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));