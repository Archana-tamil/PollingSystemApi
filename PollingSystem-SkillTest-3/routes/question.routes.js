import express from "express";

const questionRouter = express.Router();
import { addQuestion,delQuestion,viewQuestion } from "../controllers/question.controller.js";
import { addOption } from "../controllers/option.controller.js";


//different routes
questionRouter.post("/create", addQuestion);
questionRouter.post('/:id/options/create', addOption);//not in options.js as i wont be able to access the :id there
questionRouter.post('/:id/delete', delQuestion);
questionRouter.get('/:id',viewQuestion);
export default questionRouter;