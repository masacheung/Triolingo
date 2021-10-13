import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

import * as card_actions from './actions/card_actions';
import * as deck_actions from './actions/deck_actions';
import * as SessionAPIUtil from './util/session_api_util';

import * as MessageAPIUtil from './util/message_api_util';
import * as MessageActions from './actions/message_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById('root');

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  
  window.addCard = card_actions.addCard;
  window.deleteCard = card_actions.deleteCard;
  window.fetchCard = card_actions.fetchCard;
  window.fetchCards = card_actions.fetchCards;
  window.updateCard = card_actions.updateCard;

  window.addDeck = deck_actions.addDeck;
  window.deleteDeck = deck_actions.deleteDeck;
  window.fetchDeck = deck_actions.fetchDeck;
  window.fetchDecks = deck_actions.fetchDecks;
  window.updateDeck = deck_actions.updateDeck;
  
  window.signup = SessionAPIUtil.signup;

  window.getMessages = MessageAPIUtil.getMessages;
  window.createMessage = MessageAPIUtil.createMessage;

  ReactDOM.render(<Root store={store} />, root);
});