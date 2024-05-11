const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');

const messageController = require('./controllers/message');

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 5000;

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Hackers!');
});

app.post('/message', messageController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
