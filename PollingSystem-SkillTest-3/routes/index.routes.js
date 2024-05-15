import express from "express";
import questionRouter from "./question.routes.js";
import optionRouter from "./option.routes.js";
const indexRouter = express.Router();


//route to /products
indexRouter.use('/questions',questionRouter);
indexRouter.use('/options',optionRouter);

export default indexRouter;