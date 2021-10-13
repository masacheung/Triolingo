import React from 'react';

const DecksIndexList = props => {
    return(
        <div className="deck-container">
            <div className="deck">
                <div className="deck-header">
                    <h1>{props.deck.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default DecksIndexList;