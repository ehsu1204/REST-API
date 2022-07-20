const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//importing routes
const routes = require("./middleware/routes");

//Parses incoming JSON requests to req.body
app.use(express.json());

//configures the middleware in routes
app.use(routes);

//connecting to mongoDB
mongoose.connect(process.env.DATABASE, () => console.log("data connected"));

//Listening to incoming requests
const port = 2000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
