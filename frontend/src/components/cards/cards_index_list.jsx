import React from 'react';

import CardsIndexItem from './cards_index_item';

const CardsIndexList = props => {

    return(
        <div>
            {props.card.title}
            {props.card.definision}
        </div>
    )
};

export default CardsIndexList;s
