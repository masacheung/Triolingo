import React from 'react';

class Card extends React.Component{ 
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        this.props.deleteCard(id);
    }

    render(){
        let synonyms = '';

        if(this.props.card.synonyms) {
            synonyms = this.props.card.synonyms.join(', ');
        }
        return(
            <div className="card">
                <div>
                    <div className="card-header">
                        <div>
                            <h1>{this.props.card.title}</h1>
                        </div>
                        <div>
                        <h3 className="card-title">Definition: </h3> <h4>{this.props.card.definition}</h4>
                        </div>
                        <div>
                        <h3 className="card-title">Synonyms: </h3> <h4>{this.props.card.synonyms.join(', ')}</h4>
                        </div>
                        <div className="audio">
                            <audio src={this.props.card.audio} controls/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Card;
