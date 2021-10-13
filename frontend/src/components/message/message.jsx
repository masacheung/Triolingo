import React from 'react';
import MessagesList from './message_list';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: "",
            user: this.props.currentUser.username
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        this.props.fetchMessages();
        this.interval = setInterval(() => {
            this.refresh()
        }, 1000)
    }

    refresh() {
        this.props.fetchMessages();
    }

    update(e) {
        this.setState({content: e.target.value});
    }

    handleSubmit(e) {
        const message = {
            content: this.state.content,
            user: this.state.user
        }

        this.setState({content: ""});
        this.props.createMessage(message);
    }

    render() {
        if(!this.props.messages) return null;

        return (
            <div className="message-container">
                <div className="message-index-header">
                    <h1 className="message-header">
                        User Messages
                    </h1>
                </div>
                <div className="message-list-container">
                    <MessagesList messages={this.props.messages} fetchMessages={this.props.fetchMessages}/>
                </div>
                <div className="message-input-container">
                    <form onSubmit={this.handleSubmit}>
                        <input className="message-input" type="text" placeholder="Enter Message" onChange={this.update} value={this.state.content}/>
                        <button type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} className="message-submit-button"/>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Message;