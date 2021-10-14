import { connect } from "react-redux";
import OwnCardsIndex from "./own_cards_index";

import { fetchCards, fetchCard, addCard, updateCard } from "../../actions/card_actions";

const mSTP = state => ({
    currentUser: state.session.user,
    cards: state.cards
})

const mDTP = dispatch => ({
    fetchCards: () => dispatch(fetchCards()),
    fetchCard: cardId => dispatch(fetchCard(cardId)),
    addCard: card => dispatch(addCard(card)),
    updateCard: card => dispatch(updateCard(card))
})

export default connect(mSTP, mDTP)(OwnCardsIndex);