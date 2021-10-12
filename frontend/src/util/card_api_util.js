import axios from 'axios';

export const fetchCards = () => {
  return axios.get('api/cards/')
}

export const fetchCard = cardId => {
  return axios.get(`api/cards/${cardId}`)
}

export const addCard = card => {
  return axios.post('/api/cards', card)
}

export const updateCard = card => {
  return axios.patch(`/api/cards/${card.id}`, card)
}

export const deleteCard = card => {
  return axios.delete(`api/cards/${card.id}`, card)
}