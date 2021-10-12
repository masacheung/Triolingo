import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./navbar";

const mSTP = (state) => {
    return {
        state: state
    }
}

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(NavBar);