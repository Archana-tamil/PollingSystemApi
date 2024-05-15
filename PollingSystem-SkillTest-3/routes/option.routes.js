import express from "express";
import { delOption,addVote } from "../controllers/option.controller.js";
const optionRouter = express.Router();




//different routes
optionRouter.post('/:id/delete',delOption);
optionRouter.post('/:id/add_vote',addVote);

export default optionRouter;