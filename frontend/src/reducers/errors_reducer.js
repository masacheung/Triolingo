import { combineReducers } from 'redux';

import MessageErrorsReducer from './message_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  message: MessageErrorsReducer
});