const {Schema, model} = require("mongoose");
const reaction = require("./Reaction");
const reactionSchema = require("./Reaction");

dateFormat= (dateTime) => {
    return dateTime.toLocaleString();
}

const thoughtSchema = new Schema(
    {
        thoughText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        creatdAt: {
            type: Date,
            default: Date.now,
            get: dateFormat
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

thoughtSchema.virtual(ThoughtCount)

const Thought = model("thoughtCount").get(function () {
    return this.reactions.length; 
});