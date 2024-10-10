const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
const path = require("path");
const cookieParser = require('cookie-parser')

const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = require('./config/connectToDb');

// Connect to MongoDB
connectToDb().then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1);
});


// ------->------->-------> Imports
// ------->------->-------> Middleware
const ensureLoggedIn = require('./config/ensureLoggedIn')
app.use(express.json());
//  data -> json

app.use(require('./config/checkToken'))


app.use(cookieParser())

app.use(cors({
  origin: '*',
  credentials: true
}));

const discountsController = require('./controllers/discountsController');
const discountsRouter = require('./routes/discountsRouter');
app.use('/discounts', discountsRouter);

const usersController = require('./controllers/usersController');
const usersRouter = require('./routes/usersRouter');
app.use('/users', usersRouter );

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