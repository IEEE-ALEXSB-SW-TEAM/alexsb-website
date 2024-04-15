const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Hackers!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
