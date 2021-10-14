import React from "react";
import axios from "axios";

// import CardsIndexList from "../cards/cards_index_list";

class DeckShow extends React.Component{
    constructor(props) {
        super(props)

        // this.state = {
        //     deck: []
        // }
    }

    componentDidMount() {
        this.props.fetchDeck(this.props.match.params._id);
        // this.renderDeck();
        // this.props.fetchDecks();
        this.props.fetchCards();
    }

    // renderDeck = () => {
    //     axios.get('/:id')
    //         .then( res => {
    //             const data = res.data;
    //             this.setState({ deck: data})
    //         })
    // }

    render() {
        let decks = [];
        if (this.props.decks.data) {
            decks = Object.values(this.props.decks.data)
        }

        let deckshow = decks.map(deck => (
            <h2>deck.title</h2>
        ))

        return(
            <div>
                {deckshow}
                <div>
                </div>
            </div>
        )
    }
}

export default DeckShow;