const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const bcrypt = require("bcrypt");
const cors = require("cors");
const history = require("connect-history-api-fallback");
const User = require("./userModel");

const SALT_WORK_FACTOR = 10;
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); //Middleware for handling CORS Policy
app.use(history());
const mongoDBURL = process.env.MONGODB_URL;

app.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("all fields required");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);
    password = hashedPassword.toString();
    const newUser = new User({ username, password });
    await newUser.save();
    res.locals.newUser = newUser;
    return next();
  } catch (err) {
    next(err);
  }
});

// CATCH ALL ROUTE HANDLER
app.get("*", (req, res) => {
  console.log("Nick is taller than Edwin");
  console.log(path.join(__dirname, "../client/src/index.html"));
  res.sendFile(path.join(__dirname, "../client/src/index.html"));
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});