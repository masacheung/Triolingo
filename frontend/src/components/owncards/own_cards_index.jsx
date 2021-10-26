import React from "react";
import OwnCardsIndexList from "./own_cards_index_list";

class OwnCardsIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCards();
        this.interval = setInterval(() => {
            this.refresh()
        }, 1000)
    }

    refresh() {
        this.props.fetchCards();
    }

    render() {
        let cards = [];
        if (this.props.cards.data) {
            const allCards = Object.values(this.props.cards.data);
            allCards.forEach((card) => {
                if(card.user === this.props.currentUser.id){
                    cards.push(card);
                }
            })
        }


        return (
            <div className="cards-index-container">
                <div className="cards-index-header">
                    <h1 className="cards-header">Own's Cards</h1>
                </div>

                <div className="card-list-container">
                    <OwnCardsIndexList cards={this.props.cards} currentUser={this.props.currentUser} fetchCards={this.props.fetchCards} updateCard={this.props.updateCard} deleteCard={this.props.deleteCard} />
                </div>
            </div>
        )
    }
};

export default OwnCardsIndex;