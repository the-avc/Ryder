const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db/db');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/users', userRoutes);

module.exports = app;