import mongoose from "mongoose";

//defining the schema
const OptionSchema=new mongoose.Schema({
   
    text:{
        type: String,
        required: true
    },
    votes:{
        type: Number,
        required: true
    },
    link_to_vote:{
        type: String,
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
});

const Option = mongoose.model('Option', OptionSchema);
export default Option;