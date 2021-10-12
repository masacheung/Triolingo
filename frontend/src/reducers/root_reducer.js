import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import cardReducer from "./card_reducer";

const RootReducer = combineReducers({
  session: sessionReducer,
  cards: cardReducer,
  errors: errorsReducer,
});

export default RootReducer;