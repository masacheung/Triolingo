import React from "react";

// import CardsIndexList from "../cards/cards_index_list";

class DeckShow extends React.Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // this.propss.fetchDeck(this.props.match.params.id);
        this.props.fetchDecks();
        this.props.fetchCards();
    }
    render() {
        
        const deckshow = this.props.decks.map(deck => (
            <div><h2>deck.title</h2></div>
        ))

        return(
            <div>
                {deckshow}
                <div>
                        {/* cards under deck */}
                </div>
            </div>
        )
    }
}

export default DeckShow;