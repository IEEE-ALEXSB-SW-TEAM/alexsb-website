const express = require("express")
const app = express();

const db = require("./models/index");

const User = db.User
require('dotenv').config();
const port = process.env.PORT || 5000;

// Define a route handler for the root URL
app.get('/', async (req, res) => {
  res.send('Hello, Hackers!');
});

// GET endpoint to retrieve all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
      console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
});

db.sequelize.sync().then((req) => {
    app.listen(5000, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});