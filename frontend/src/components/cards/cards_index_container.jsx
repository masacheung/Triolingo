import { connect } from "react-redux";
import CardsIndex from "./cards_index";

import { fetchCards, fetchCard, addCard, deleteCard } from "../../actions/card_actions";

const mSTP = state => ({
    currentUser: state.session.user.username,
    cards: state.cards
})

const mDTP = dispatch => ({
    fetchCards: () => dispatch(fetchCards()),
    fetchCard: cardId => dispatch(fetchCard(cardId)),
    addCard: card => dispatch(addCard(card)),
    deleteCard: cardId => dispatch(deleteCard(cardId))
})

export default connect(mSTP, mDTP)(CardsIndex);

