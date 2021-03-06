import React from 'react';
import Modal from 'react-modal';


class Card extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            card: null,
            title: "",
            definition: "",
            synonyms: "",

        }
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        this.props.fetchCards();
    }

    update(field){
        return e => {this.setState({[field]: e.currentTarget.value})}
    }

    handleDelete(id) {
        this.props.deleteCard(id);
    }

    handleOpenModal(card) {
        this.setState({modal: true, title: card.title, definition: card.definition, synonyms: card.synonyms, card: card})
    }

    handleCloseModal() {
        this.setState({modal: false})
    }

    handleUpdate(){
        let card = this.state.card;
        card.title = this.state.title;
        card.definition = this.state.definition;
        card.synonyms = this.state.synonyms;
        this.props.updateCard(card);
        this.handleCloseModal();
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
                        <div className="button">
                            <button className="update-button" onClick={() => this.handleOpenModal(this.props.card)}>Update</button>
                            <button className="delete-button" onClick={() => this.handleDelete(this.props.card._id)}>Delete</button>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} className="overlay">
                    <div className="my-create-modal">
                        <h2 className="create-modal-title">Update flash card</h2>
                        <label className="create-modal-label">Title</label>
                        <input className="create-modal-input" type="text" placeholder="Flash Card Title" value={this.state.title} onChange={this.update('title')}/>
                        
                        <label className="create-modal-label">Definition</label>
                        <input className="create-modal-input" type="text" placeholder="Flash Card Definition" value={this.state.definition} onChange={this.update('definition')}/>

                        <label className="create-modal-label">Synonyms</label>
                        <input className="create-modal-input" type="text" placeholder="Flash Card Synonyms" value={this.state.synonyms} onChange={this.update('synonyms')}/>


                        <div className="modal-buttons">
                            <button onClick={this.handleCloseModal} className="cancel">Cancel</button>
                            <button onClick={this.handleUpdate} className="continue">Update</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
};

export default Card;
