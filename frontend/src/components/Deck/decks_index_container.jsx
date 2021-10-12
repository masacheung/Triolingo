import { connect } from "react-redux";
import DeckIndex from './decks_index';

import { fetchDecks, fetchDeck, addDeck, deleteDeck } from "../../actions/deck_actions";


const mSTP = state => ({
    currentUser: state.session.user.username,
    decks: state.decks
})

const mDTP = dispatch => ({
    fetchDecks: () => dispatch(fetchDecks()),
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    addDeck: deck => dispatch(addDeck(deck)),
    deleteDeck: deckId => dispatch(deleteDeck(deckId))
})

export default connect(mSTP, mDTP)(DeckIndex);