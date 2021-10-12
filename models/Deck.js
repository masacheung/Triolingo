const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema(
  {
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'cards'        
    }],
    user_: {
        type: Schema.Types.ObjectId,
        ref: 'users'        
    },
    title: {
        type: String,
        required: true,
        unique: true
    }
  }
)

const Deck = mongoose.model("Deck", DeckSchema);
module.exports = Deck;