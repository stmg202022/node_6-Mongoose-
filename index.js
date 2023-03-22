require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");

const path = require("path");

const productRouter = require("./Routes/product");
// const userRouter = require("./Routes/user");

//DB_CONNECTION IN MONGOOSE
main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

  //application connections
  await mongoose.connect(process.env.MONGODB_CONNECTIONS);
  console.log("DATABASE_CONNECTED SUCCESSFULLY");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// console.log(process.env);
// console.log(process.env.DB_PASSWORD);

//this cors helps to connect frontend anad backend server
app.use(cors());

app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR))); // "/" => goes to product page

app.use("/", productRouter.router); //This is a middleware between app and router
// app.use("/api", userRouter.router); //This is a middleware between app and router

// const morgan = require("morgan");

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
