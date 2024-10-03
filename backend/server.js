const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const connectToDb = require('./config/connectToDb');

// Connect to MongoDB
connectToDb().then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1);
});

app.use(express.json());
app.use(cors({
  origin: '*',
  credentials: true
}));

const discountsController = require('./controllers/discountsController');
const discountsRouter = require('./routes/discountsRouter');
app.use('/discounts', discountsRouter);

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});