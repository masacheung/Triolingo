import React from "react";
import DeckCardsShowList from "./deck_cards_show"
class DeckShow extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchDecks();
    this.props.fetchDeck(this.props.currentDeckId);
    this.props.fetchCards();
  }
  render() {
    let curDeck = null;
    this.props.decks.data.forEach((deck) => {
      if (deck._id === this.props.deckId.toString()){
        curDeck = deck;
      }
    })

    let curCard = [];

    const cards = this.props.cards;

    cards.forEach(card => {
      curDeck.cards.forEach(deckCard => {
        if(card._id == deckCard){
          curCard.push(card);
        }
      })
    })

    return(
      <div className="decks-index-container">
        <div className="decks-index-header">
          <h1 className="decks-header">{curDeck.title}</h1>
        </div>

        <div className="card-list-container">
          <DeckCardsShowList cards={curCard}/>
        </div>
      </div>
    )
  }
}

export default DeckShow;