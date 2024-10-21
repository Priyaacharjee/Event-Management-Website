const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const adminRouter = require("./routes/adminRouter");
const userRouter = require("./routes/userRouter");
require("dotenv").config();
require('./config/mongoose-connection')

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use("/admins", adminRouter);
app.use("/users", userRouter);


app.listen(8000);

const mongoose = require('mongoose');

// Replace with your actual MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/myDatabase';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,   // Helps handle special characters in the URI
  useUnifiedTopology: true // Ensures MongoDB uses the new connection management engine
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB:', err));
