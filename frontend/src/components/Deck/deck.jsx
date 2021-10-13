import React from 'react';

const Deck = props => {
    return (
        <div className="deck">
            <div>
                <div className="deck-header">
                    <h1>{props.deck.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Deck;