import React from 'react';
import Card from "./card";


const OwnCardsIndexList = props => {

    const cardList = props.cards.map((card) => {
        if(!card) return null;

        return (
            <div className="card-container">
                <Card card={card} updateCard={props.updateCard} fetchCards={props.fetchCards} deleteCard={props.deleteCard}/>
            </div>        
        )
    });

    return cardList;
};

export default OwnCardsIndexList;
