import React from "react";

import CardsIndexList from "../cards/cards_index_list";

class DeckShow extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.propss.fetchDeck(this.props.currentDeckId);
        this.props.fetchCards();
    }
    render() {
        let decks = [];
        if (this.props.decks.data) {
            decks = Object.values(this.props.decks.data)
        }

        let cards = [];
        if(this.props.cards.data) {
            cards = Object.values(this.props.cards)
        }
       

        return(
            <div>
                <div>
                    {decks.map( deck => (
                        <h2>{deck.title}</h2>
                    ))}
                </div>

                <div>
                    <CardsIndexList />
                </div>
            </div>
        )
    }
}

export default DeckShow;