import { connect } from "react-redux";


import SignupForm from "./signup_form";
import { signup, login, removeErrors } from "../../actions/session_actions"

const mapStateToProps =({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up',
})

const mapDispatchToProps = (dispatch) =>  ({
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);