import { connect } from "react-redux";
import Nav from "./nav";
import { addCard } from "../../actions/card_actions";

const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

const mDTP = (dispatch) => {
    return {
        addCard: (card) => dispatch(addCard(card))
    }
}

export default connect(mSTP, mDTP)(Nav)