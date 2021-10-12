import { connect } from "react-redux";
import CardsIndex from "./cards_index";

const mSTP = state => ({
    cards: Object.values(state.cards)
})

const mDTP = state => ({
    fetchCards: () => dispatch(fetchCards()),
    addCard: card => dispatch(addCard(card)),
    deleteCard: cardId => dispatch(deleteCard(cardId))
})

export default connect(mSTP, mDTP)(CardsIndex);

