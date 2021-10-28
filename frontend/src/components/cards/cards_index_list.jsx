import React from 'react';
import Card from "./card";


const CardsIndexList = props => {

    const cardList = props.cards.map((card, i) => {
        if(!card) return null;

        return (
            <div className="card-container" key={i}>
                <Card card={card} deleteCard={props.deleteCard}/>
            </div>        
        )
    });

    return cardList;
};

export default CardsIndexList;
