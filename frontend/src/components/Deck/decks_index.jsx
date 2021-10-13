import React from "react";
import DecksIndexList from "./decks_index_list";

class DecksIndex extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchDecks();
    }

    componentDidUpdate(prevProps){
        if(prevProps.decks !== this.props.decks) this.props.fetchDecks();
    }

    render() {

        console.log(this.props.decks)
        
        let {fetchDecks, fetchDeck, addDeck, deleteDeck} = this.props;
        let decks = [];
        if (this.props.decks.data) {
            decks = Object.values(this.props.decks.data)
        }
        return(
            <div className="decks-index-container">
                <div className="decks-index-header">
                    <h1 className="decks-header">All Decks</h1>
                </div>

                <div className="deck-list-container">
                        <DecksIndexList decks={decks} fetchDecks={fetchDecks} fetchDeck={fetchDeck} addDeck={addDeck} deleteDeck={deleteDeck}/>
                </div>
            </div>
        )
    }
}

export default DecksIndex;