const {Schema, model} = require("mongoose");
const reactionSchema = require("./Reaction");
const { Thought } = require(".");

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
            virtuals: true,
            getters: true
        }
    }
);

thoughtSchema.virtual("ThoughtCount").get(function () {
    return this.reactions.length; 
});

const Thought = model("thought", thoughtSchema);


module.exports = Thought;