const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const history = require("connect-history-api-fallback");
const User = require("./userModel");
const { redirect } = require("react-router-dom");

const SALT_WORK_FACTOR = 10;
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); //Middleware for handling CORS Policy
app.use(history());

app.post("/signup", async (req, res, next) => {
  console.log("REACHED");
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("all fields required");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);
    const hashedPasswordString = hashedPassword.toString();
    const newUser = new User({ username, password: hashedPasswordString });
    await newUser.save();
    res.locals.newUser = newUser;
    res.redirect("/");
    console.log("USER SAVED");
    return next();
  } catch (err) {
    next(err);
  }
});

// CATCH ALL ROUTE HANDLER
app.get("*", (req, res) => {
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
  .connect(
    `mongodb+srv://imnathanpatterson:6vc9gaUzObysIqII@einstein.sr0kt9y.mongodb.net/?retryWrites=true&w=majority&appName=Einstein`
  )
  .then(() => {
    console.log("Connected to MDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
