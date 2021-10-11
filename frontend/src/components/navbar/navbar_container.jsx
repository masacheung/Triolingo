import { connect } from "react-redux";
import NavBar from "./navbar";

const mSTP = (state) => {
    return {
        state: state
    }
}

export default connect(null)(NavBar);