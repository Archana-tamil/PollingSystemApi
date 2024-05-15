import mongoose from "mongoose";
import Question from "../schema/question.schema.js";
import Option from "../schema/option.schema.js";

export const addOption = async function(req, res) {
    try {
        const question = await Question.findById(req.params.id);
        
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        const option = await Option.create({
            text: req.body.text,
            votes: req.body.votes || 0, // Default votes to 0 if not provided
            question: req.params.id
        });

        option.link_to_vote = "http://localhost:6000/options/" + option.id + "/add_vote";
        await option.save();

        question.options.push(option);
        await question.save();

        return res.status(201).json({ option, data: { message: "Option Created Successfully!" } });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const delOption = async function(req, res) {
    try {
        const option = await Option.findById(req.params.id);
        
        if (!option) {
            return res.status(404).json({ message: "Option not found" });
        }

        const question_id = option.question;
        await option.remove();

        const question = await Question.findById(question_id);
        question.options.remove(req.params.id);
        await question.save();

        return res.json({ message: "Option Deleted Successfully!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const addVote = async function(req, res) {
    try {
        const option = await Option.findByIdAndUpdate(
            req.params.id,
            { $inc: { votes: 1 } },
            { new: true }
        );

        if (!option) {
            return res.status(404).json({ message: "Option not found" });
        }

        return res.json({
            data: {
                option,
                message: "Vote Added Successfully!"
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
