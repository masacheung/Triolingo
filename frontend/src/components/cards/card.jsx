import React from 'react';

const Card = props => { 

    let synonyms = '';

    if(props.card.synonyms) {
        synonyms = props.card.synonyms.join(', ');
    }

    return(
        <div className="card">
            <div>
                <div className="card-header">
                    <div>
                        <h1>{props.card.title}</h1>
                    </div>
                    <div>
                        <h3>Definition: {props.card.definition}</h3>
                    </div>
                    <div>
                        <h3>Synonyms: {props.card.synonyms.join(', ')}</h3>
                    </div>
                    <div className="audio">
                        <audio src={props.card.audio} controls/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
