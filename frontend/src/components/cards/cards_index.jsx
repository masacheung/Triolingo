import React from "react";
import CardsIndexList from "./cards_index_list";

class CardsIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        let cards = [];
        if (this.props.cards.data) {
            cards = Object.values(this.props.cards.data)
        }
        return (
            <div className="cards-index-container">
                <div className="cards-index-header">
                    <h1 className="cards-header">All Cards</h1>
                </div>

                <div className="all-cards">
                    {cards.map( card=> (
                        <CardsIndexList card={card} key={card._id}/>
                    ))}
                </div>
            </div>
        )
    }
};

export default CardsIndex;
