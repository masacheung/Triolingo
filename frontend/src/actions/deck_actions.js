import * as DeckApiUtil from '../util/deck_api_util';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

// action constants

const receiveDecks = (decks) => {
    return ({
        type: RECEIVE_DECKS,
        decks
    })
}
const receiveDeck = (deck) => {
    return ({
        type: RECEIVE_DECK,
        deck
    })
}
const removeDeck = (deckId) => {
    return ({
        type: REMOVE_DECK,
        deckId
    })
}

// thunk action creators
export const fetchDecks = () => dispatch => {
    return DeckApiUtil.fetchDecks()
        .then(decks => (dispatch(receiveDecks(decks))
    ))
};
export const fetchDeck = (deckId) => dispatch => {
    return DeckApiUtil.fetchDeck(deckId)
        .then(deck => (dispatch(receiveDeck(deck))
    ))
};

export const addDeck = (deck) => dispatch => {
    return DeckApiUtil.addDeck(deck)
        .then(deck => (dispatch(receiveDeck(deck))
    ))
};

export const updateDeck = (deck) => dispatch => {
    return DeckApiUtil.updateDeck(deck)
        .then(deck => (dispatch(receiveDeck(deck))
    ))
};

export const deleteDeck = (deckId) => dispatch => {
    return DeckApiUtil.deleteDeck(deckId)
        .then(deck => (dispatch(removeDeck(deck.id))
    ))
};