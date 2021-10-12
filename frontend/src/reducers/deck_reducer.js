import { RECEIVE_DECKS, RECEIVE_DECK, REMOVE_DECK } from '../actions/deck_actions';

const deckReducer = (state = {}, action ) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    case RECEIVE_DECK:
      nextState[action.deck.id] = action.deck.data
      return nextState;
    case REMOVE_DECK:
      delete nextState[action.deck.id]
      return nextState;
    default:
      return state;
  }

}

export default deckReducer;