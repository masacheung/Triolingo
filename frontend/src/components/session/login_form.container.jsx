import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Log In'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);