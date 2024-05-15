import mongoose from "mongoose";
import Question from "../schema/question.schema.js";
import Option from "../schema/option.schema.js";

export const addQuestion = async function(req, res) {
    try {
        const question = await Question.create(req.body);
        return res.json({ question, data: { message: "Question Created Successfully!" } });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
};

export const delQuestion = async function(req, res) {
    try {
        const question = await Question.findById(req.params.id);
        await question.remove();
        await Option.deleteMany({ question: req.params.id });
        
        return res.json({ message: "Question and Associated Options Deleted Successfully!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
};

export const viewQuestion = async function(req, res) {
    try {
        const question = await Question.findById(req.params.id).populate('options');
        return res.json({ question });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
};
