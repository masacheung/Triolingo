import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faLayerGroup, faUserAlt, faQuestionCircle, faInbox} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-modal';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            definition: "",
            user: this.props.currentUser._id,
            modal: false
        }

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCreateCard = this.handleCreateCard.bind(this);
    }

    componentDidMount(){
        this.props.fetchCards();
    }

    update(field){
        return e => {this.setState({[field]: e.currentTarget.value})}
    }

    handleOpenModal() {
        this.setState({modal: true})
    }

    handleCloseModal() {
        this.setState({modal: false})
    }

    handleCreateCard() {
        let card = {
            title: this.state.title,
            definition: this.state.definition,
            user: this.state.user
        }

        this.props.addCard(card);
        this.handleCloseModal();
    }

    render() {

        let name = '';
        if (this.props.currentUser) {
            name = this.props.currentUser.username;
        }

        return (
            <div className="main-nav">
                <div className="main-nav-user">
                    <div className="main-nav-profile">
                        <FontAwesomeIcon icon={faUserAlt}/>
                    </div>
                    <div className="main-nav-username"> 
                        {name}
                    </div>
                </div>
                <button className="new-card" onClick={this.handleOpenModal}>
                    <FontAwesomeIcon icon={faPlus}/><div className="new-card-name">Add Card</div>
                </button>
                <ul className="main-nav-list">
                    <li>
                        <Link to="/main"><FontAwesomeIcon icon={faQuestionCircle}/> FAQ</Link>
                    </li>
                    <br className="main-nav-gap"/>
                    <li>
                        <Link to="/cards"><FontAwesomeIcon icon={faLayerGroup}/> All Cards</Link>
                    </li>
                    <br className="main-nav-gap"/>
                    <li>
                        <Link to="/decks"><FontAwesomeIcon icon={faInbox}/> All Categories</Link>
                    </li>
                </ul>
                <div className="social">
                    <a href="https://github.com/masacheung/Triolingo"><FontAwesomeIcon icon={faGithub} className="social-img"/></a>
                </div>
                <Modal isOpen={this.state.modal} className="overlay">
                    <div className="my-create-modal">
                        <h2 className="create-modal-title">Create new flash card</h2>
                        <label className="create-modal-label">Title</label>
                        <input className="create-modal-input" type="text" placeholder="Flash Card Title" value={this.state.title} onChange={this.update('title')}/>
                        
                        <label className="create-modal-label">Definition</label>
                        <input className="create-modal-input" type="text" placeholder="Flash Card Definition" value={this.state.definition} onChange={this.update('definition')}/>

                        <div className="modal-buttons">
                            <button onClick={this.handleCloseModal} className="cancel">Cancel</button>
                            <button onClick={this.handleCreateCard} className="continue">Create</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Nav;