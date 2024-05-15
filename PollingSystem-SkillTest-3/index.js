import express from "express";
const app = express();
import indexRouter from "./routes/index.routes.js";
import { connectUsingMongoose } from "./config/mongooseDb.js";
const port = 6000;

// body parser for req.body
app.use(express.urlencoded({extended: true}));

connectUsingMongoose();
// use express router
app.use("/", indexRouter);

//Server Listner
app.listen(port, function(err) {
  if (err) {
    console.log("Error Running the Server", err);
  }
  console.log("Server Running on Port ", port);
});