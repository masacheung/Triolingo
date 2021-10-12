import React from 'react';


const CardsIndexList = props => {

    
    return(
        <div>
            {props.card.title}
            {props.card.definition}
        </div>
    )
};

export default CardsIndexList;
