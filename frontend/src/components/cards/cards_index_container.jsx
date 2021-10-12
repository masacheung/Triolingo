import { connect } from "react-redux";
import CardsIndex from "./cards_index";

const mSTP = state => ({
    currentUser: state.session.user.username,
    cards: Object.values(state.cards)
})

const mDTP = dispatch => ({
    fetchCards: () => dispatch(fetchCards()),
    fetchCard: cardId => dispatch(fetchCard(cardId)),
    addCard: card => dispatch(addCard(card)),
    deleteCard: cardId => dispatch(deleteCard(cardId))
})

export default connect(mSTP, mDTP)(CardsIndex);

