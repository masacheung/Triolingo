import React from "react";
import CardsIndexList from "./cards_index_list";

class CardsIndex extends React.Component{
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
        // let cards = [];
        // if (this.props.cards.data) {
        //     cards = Object.values(this.props.cards.data)
        // }

        return (
            <div className="cards-index-container">
                <div className="cards-index-header">
                    <h1 className="cards-header">All Cards</h1>
                </div>

                <div className="card-list-container">
                    <CardsIndexList cards={this.props.cards} currentUser={this.props.currentUser} fetchCards={this.props.fetchCards} deleteCard={this.props.deleteCard}/>
                </div>
            </div>
        )
    }
};

export default CardsIndex;
