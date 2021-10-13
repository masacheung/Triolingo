import React from 'react';

class MessagesList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        if(!this.props.messages) return null;

        return (
            <ul className="message-list">
                {this.props.messages.map((message) => (
                    <li className="message-item">
                        <div className="message-item-user">
                            {message.user}
                        </div>
                        <div className="message-item-message">
                            {message.content}
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MessagesList;