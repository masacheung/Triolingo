import { connect } from "react-redux";
import DeckShow from './deck_show';

import { fetchDecks, fetchDeck } from "../../actions/deck_actions";
import { fetchCards, addCard } from "../../actions/card_actions";

const mSTP = (state, ownProps) => ({
    decks: state.decks,
    // decks: Object.values(Object.assign({},state.decks.data)),
    // decks: Object.assign({}, state.decks.data),
    cards: Object.values(Object.assign({},state.cards.data)),
    deck: state.decks[ownProps.match.params.id]
    // deck: Object.assign({},state.decks.data)[state.cards.data._id],
    // card: state.card[ownProps.match.params.cardId],
    // currentDeckId: ownProps.match.params.deckId
})

const mDTP = (dispatch) => ({
    fetchDecks: () => dispatch(fetchDecks()),
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),

    fetchCards: () => dispatch(fetchCards()),
    addCard: card => dispatch(addCard(card))
})

export default connect(mSTP, mDTP)(DeckShow);