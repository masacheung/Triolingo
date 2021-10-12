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
            required: true,
            unique: true
        },
        definition: {
            type: String,
            required: true
        },
        synonyms: [String],
        audio: {
            type: String,
        },
        notes: {
            type: String
        },
        category: {
            type: String,
            default: "English"
        },
        character: {
            type: String
        }
    }
)

const Card = mongoose.model("Card", CardSchema);
module.exports = Card;