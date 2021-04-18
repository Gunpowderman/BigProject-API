//**** Dependencies ****//
const express = require("express");
const cors = require("cors");

//**** Imports ****//
const db = require("./db/models");
const transactionRoutes = require("./routes/transaction");

//**** Code ****//
const app = express();
app.use(cors());
app.use(express.json());
app.use("/transaction", transactionRoutes);

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

//**** Start Server ****//
const run = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection to database succesful");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};

run();
