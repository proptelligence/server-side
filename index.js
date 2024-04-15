require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose'); 
const sls = require('serverless-http');
const cors = require('cors');
const userRoutes = require('./routes/auth.js');

const PORT = process.env.PORT || 5000;
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", 'GET', "PUT", "DELETE"],
    credentials: true
}));

app.use('/user', userRoutes); 




mongoose.connect('mongodb+srv://21955a2101:VKBzy9wLgiHjbasl@cluster0.qz5renm.mongodb.net/prop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));


app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
}); 

//module.exports.server = sls(app)