import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB, User } from './config/mongodb.js'; // Import the User model and connectDB

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send("API Working");
});

// Route to create a new user
app.post('/users', async (req, res) => {
  try {
    const { role, email, password } = req.body;

    if (!role || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({ role, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
});

// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
});

// Start the server
app.listen(port, () => console.log("Server started on port", port));
