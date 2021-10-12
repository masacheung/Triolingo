import { connect } from "react-redux";
import DeckShow from './deck_show';

import { fetchDecks, fetchDeck } from "../../actions/deck_actions";
import { fetchCards, addCard } from "../../actions/card_actions";

const mSTP = (state, ownProps) => ({
    decks: Object.values(state.decks.data),
    cards: Object.values(state.cards.data),
    deck: state.decks.data[ownProps.match.params.deckId],
    card: state.card.data[ownProps.match.params.cardId],
    currentDeckId: ownProps.match.params.deckId
})

const mDTP = (dispatch, ownProps) => ({
    fetchDecks: () => dispatch(fetchDecks()),
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),

    fetchCards: () => dispatch(fetchCards()),
    fetchCard: cardId => dispatch(fetchCard(cardId))
})

export default connect(mSTP, mDTP)(DeckShow);