import { connect } from "react-redux";
import Nav from "./nav";
import { addCard, fetchCards } from "../../actions/card_actions";

const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

const mDTP = (dispatch) => {
    return {
        fetchCards: () => dispatch(fetchCards()),
        addCard: (card) => dispatch(addCard(card))
    }
}

export default connect(mSTP, mDTP)(Nav)