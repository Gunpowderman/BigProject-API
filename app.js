const express = require("express");
const db = require("./db/models");
const passport = require("passport");
const cors = require("cors");
const userRoutes = require("./routes/users");

const { localStrategy } = require("./middleware/passport");

const app = express();

//cors
app.use(cors());

// Passport Setup
app.use(passport.initialize());
passport.use(localStrategy);

//body-parser
app.use(express.json());
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const run = async () => {
  try {
    await db.sequelize.sync(false);
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
