import { connect } from "react-redux";
import DeckShow from './deck_show';

import { fetchDecks, fetchDeck } from "../../actions/deck_actions";
import { fetchCards, addCard } from "../../actions/card_actions";

const mSTP = (state, ownProps) => ({

})

const mDTP = (dispatch, ownProps) => ({

})

export default connect(mSTP, mDTP)(DeckShow);