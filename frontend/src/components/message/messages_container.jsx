import { connect } from "react-redux";
import { createMessage, fetchMessages } from "../../actions/message_actions";
import Message from "./message";

const mSTP = state => {
    return {
        messages: state.messages ? Object.values(state.messages).reverse() : [],
        currentUser: state.session.user
    }
}

const mDTP = dispatch => {
    return {
        fetchMessages: () => dispatch(fetchMessages()),
        createMessage: message => dispatch(createMessage(message))
    }
}

export default connect(mSTP, mDTP)(Message);