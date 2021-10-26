import { connect } from "react-redux";
import OwnCardsIndex from "./own_cards_index";

import { fetchCards, fetchCard, addCard, updateCard, deleteCard } from "../../actions/card_actions";

const mSTP = state => ({
    currentUser: state.session.user,
    cards: Object.values(state.cards)
})

const mDTP = dispatch => ({
    fetchCards: () => dispatch(fetchCards()),
    fetchCard: cardId => dispatch(fetchCard(cardId)),
    addCard: card => dispatch(addCard(card)),
    updateCard: card => dispatch(updateCard(card)),
    deleteCard: cardId => dispatch(deleteCard(cardId))
})

export default connect(mSTP, mDTP)(OwnCardsIndex);