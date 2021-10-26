import { connect } from "react-redux";
import DeckShow from './deck_show';

import { fetchDecks, fetchDeck } from "../../actions/deck_actions";
import { fetchCards, addCard } from "../../actions/card_actions";

const mSTP = (state, ownProps) => ({
    decks: state.decks,
    cards: Object.values(state.cards),
    deckId: ownProps.match.params.deckId
})

const mDTP = (dispatch, ownProps) => ({
    fetchDecks: () => dispatch(fetchDecks()),
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    fetchCards: () => dispatch(fetchCards()),
    addCard: card => dispatch(addCard(card))
})

export default connect(mSTP, mDTP)(DeckShow);