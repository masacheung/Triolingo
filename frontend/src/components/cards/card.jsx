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

        let audio;
        if(this.props.card.audio) {
            audio = <audio src={this.props.card.audio} controls/>
        }else {
            audio = '';
        }
        return(
            <div className="card">
                <div>
                    <div className="card-header">
                        <div>
                            <h1>{this.props.card.title}</h1>
                        </div>
                        <div>
                            <h3>Definition: {this.props.card.definition}</h3>
                        </div>
                        <div>
                            <h3>Synonyms: {this.props.card.synonyms.join(', ')}</h3>
                        </div>
                        <div className="audio">
                            {/* <audio src={this.props.card.audio} controls/> */}
                            {audio}
                        </div>
                        {/* <button onClick={() => this.handleDelete(this.props.card._id)}>HELO</button> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default Card;
