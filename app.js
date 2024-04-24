// Import express
const express = require('express');

// Membuat object express
const app = express();

// Import router
const router = require('./routes/api.js');

// Menggunakan router
app.use(router);

// Mendefinisikan port.
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});