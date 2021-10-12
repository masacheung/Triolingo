import axios from 'axios';

export const fetchDecks = () => {
  return axios.get('api/decks/')
}

export const fetchDeck = deckId => {
  return axios.get(`api/decks/${deckId}`)
}

export const addDeck = deck => {
  return axios.post('/api/decks', deck)
}

export const updateDeck = deck => {
  return axios.patch(`/api/decks/${deck.id}`, deck)
}

export const deleteDeck = deckId => {
  return axios.delete(`api/decks/${deckId}`)
}