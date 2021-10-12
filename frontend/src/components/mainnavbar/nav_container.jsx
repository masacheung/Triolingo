import { connect } from "react-redux";
import Nav from "./nav";

const mSTP = (state) => {
    return {
        state: state
    }
}

export default connect(mSTP)(Nav)