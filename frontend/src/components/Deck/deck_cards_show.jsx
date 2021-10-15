import React from 'react';
import Card from "./card";

const DeckCardsShowList = props => {

    const cardList = props.cards.map((card) => {
        if(!card) return null;

        return (
            <div className="card-container">
                <Card card={card}/>
            </div>        
        )
    });

    return cardList;
};

export default DeckCardsShowList;
