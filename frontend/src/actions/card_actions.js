import * as CardUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
// export const RECEIVE_NEW_CARD = 'RECEIVE_NEW_CARD';

// action constants

const receiveCards = (cards) => {
    return ({
        type: RECEIVE_CARDS,
        cards
    })
}
const receiveCard = (card) => {
    return ({
        type: RECEIVE_CARD,
        card
    })
}
// const receiveNewCard = card => {
//   return ({
//     type: RECEIVE_NEW_CARD,
//     card
//   })
// }
const removeCard = (cardId) => {
    return ({
        type: REMOVE_CARD,
        cardId
    })
}

// thunk action creators
export const fetchCards = () => dispatch => {
    return CardUtil.fetchCards()
        .then(cards => (dispatch(receiveCards(cards))
    ))
};
export const fetchCard = (cardId) => dispatch => {
    return CardUtil.fetchCard(cardId)
        .then(card => (dispatch(receiveCard(card))
    ))
};

// export const addCard = (card) => dispatch => {
//     return CardUtil.addCard(card)
//         .then(card => (dispatch(receiveCard(card))
//     ))
// };
export const addCard = (card) => dispatch => {
    return CardUtil.addCard(card)
        .then(card => (dispatch(receiveCard(card))
    ))
};

export const updateCard = (card) => dispatch => {
    return CardUtil.updateCard(card)
        .then(expense => (dispatch(receiveCard(card))
    ))
};

export const deleteCard = (cardId) => dispatch => {
    return CardUtil.deleteCard(cardId)
        .then(() => (dispatch(removeCard(cardId))
    ))
};