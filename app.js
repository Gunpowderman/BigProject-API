//**** Dependencies ****//
const express = require("express");
const cors = require("cors");
const passport = require("passport");

//**** Imports ****//
const db = require("./db/models");
const transactionRoutes = require("./routes/transaction");
const childRoutes = require("./routes/child");
const userRoutes = require("./routes/users");
const { localStrategy, jwtStrategy } = require("./middleware/passport");


//**** Code ****//
const app = express();
app.use(cors());
app.use(express.json());
app.use("/transaction", transactionRoutes);
app.use("/child", childRoutes);
app.use(userRoutes);


//**** Middleware ****//
//Path not found middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

//Error handling middleware
app.use((req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message || "Internal Server Error" });
});


// Passport Setup
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);


//**** Start Server ****//
const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to database succesful");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {console.error("Error connecting to database: ", error); }
};

    run();










