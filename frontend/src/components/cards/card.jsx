import React from 'react';

const Card = props => { 
    return(
        <div className="card">
            <div>
                <div className="card-header">
                    <div>
                        <h1>{props.card.title}</h1>
                    </div>
                    <div>
                    <h3>{props.card.definition}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
