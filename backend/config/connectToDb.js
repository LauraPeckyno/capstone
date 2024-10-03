const express = require("express");
const app = express();
const mongoose = require('mongoose');

require("dotenv").config()
app.use(express.json());

const connectToDb = async() => {
    await mongoose.connect(process.env.DB_URL);
    console.log(`DataBase_Connected`)
}

module.exports = connectToDb