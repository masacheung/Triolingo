import { RECEIVE_CARDS, RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';

const cardReducer = (state = {}, action ) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    case RECEIVE_CARD:
      nextState[action.card.id] = action.card.data
      return nextState;
    // case RECEIVE_NEW_CARD:
    //   nextState[action.card._id] = action.card.data
    //   return nextState;
    case REMOVE_CARD:
      delete nextState[action.card._id]
      return nextState;
    default:
      return state;
  }

}

export default cardReducer;