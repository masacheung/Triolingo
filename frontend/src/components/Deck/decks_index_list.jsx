import React from 'react';
import Deck from './deck';

const DecksIndexList = props => {
  const deckList = props.decks.map((deck) => {
    if(!deck) return null;

    return (
      <div className="deck-container">
        <Deck deck={deck}/>
      </div>
    )
  })

  return deckList
}

export default DecksIndexList;