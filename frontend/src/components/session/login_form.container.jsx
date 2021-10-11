import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Log In'
});

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);