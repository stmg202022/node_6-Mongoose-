require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");

const productRouter = require("./Routes/product");
// const userRouter = require("./Routes/user");

//DB_CONNECTION IN MONGOOSE
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("DATABASE_CONNECTED SUCCESSFULLY");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// console.log(process.env);
// console.log(process.env.DB_PASSWORD);
app.use(cors());

app.use("/api", productRouter.router); //This is a middleware between app and router
// app.use("/api", userRouter.router); //This is a middleware between app and router

// const morgan = require("morgan");

app.listen(process.env.PORT, () => {
  console.log("server started");
});
