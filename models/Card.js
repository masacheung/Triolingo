const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        title: {
            type: String,
            required: true
        },
        definition: {
            type: String,
            required: true
        },
        synonyms: {
            type: String,
        },
        audio: {
            type: String,
        },
        notes: {
            type: String
        }
    }
)

const Card = mongoose.model("Card", CardSchema);
module.exports = Card;