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
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use("/admins", adminRouter);
// app.use("/users", userRouter);

app.listen(8000);
