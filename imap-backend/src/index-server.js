const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var cors = require('cors')
app.use(express.json())
app.use(cors()) // Use this after the variable declaration

// Routes
const userRoutes = require('./routes/user');
const issueRoutes = require('./routes/issues');
const announcementRoutes = require('./routes/announcements');

// Environment Vars
env.config();

// Connecting to Database
const mongoUri = process.env.MONGO_URI
mongoose.connect(
    mongoUri, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,

    }
).then(() => {
    console.log("Database is connected now!");
});

app.use('/login',userRoutes); // prefixing all api's with keyword api
app.use('/dashboard',issueRoutes);
app.use('/announcement',announcementRoutes);
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port: ${process.env.PORT}`);
});