const { Schema, Types } = require("mongoose");

const timeFormat = (dateTime) => {
    return dateTime.toLocaleString()
};

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeFormat,
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);


module.exports = reactionSchema;