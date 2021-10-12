import React from "react";
import DecksIndexList from "./decks_index_list";

class DecksIndex extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchDecks();
    }
    render() {
        let {fetchDecks, fetchDeck, addDeck, deleteDeck} = this.props;
        let decks = [];
        if (this.props.decks.data) {
            decks = Object.values(this.props.decks.data)
        }
        return(
            <div>
                <div>
                    <h2>Decks</h2>
                </div>

                <div>
                    {decks.map( deck => (
                        <DecksIndexList deck={deck} key={deck._id}  fetchDecks={fetchDecks} fetchDeck={fetchDeck} addDeck={addDeck} deleteDeck={deleteDeck}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default DecksIndex;