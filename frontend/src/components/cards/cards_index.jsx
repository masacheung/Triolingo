import React from "react";

const CardsIndex = props => {

    const componentDidMount = () => {
        props.fetchCards();
    }

    return (
        <div className="cards-index">
            <div className="cards-index-header">
                <h2>All Cards</h2>
            </div>

            <div className="all-cards">
                <CardsIndexList cards={cards} currentUser={currentUser} fetchCard={fetchCard} addCard={addCard} deleteCard={deleteCard}/>
            </div>
        </div>
    )
};

export default CardsIndex;
