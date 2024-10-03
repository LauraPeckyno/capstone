const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');

const connectToDb = require('./config/connectToDb');
connectToDb();

app.use(express.json());
//  data -> json


app.use(cors({
    origin:true,
    credentials: true
  }));
// CORS: CrossOriginResourceSharing






app.listen(PORT,()=> {
    console.log('server running')
});