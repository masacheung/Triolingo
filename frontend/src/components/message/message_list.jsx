import React from 'react';

class MessagesList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        if(!this.props.messages) return null;

        // const messages = this.props.messages.reverse();

        // let output = messages.slice(0, 14);

        return (
            // <div className="message-list-div">
                <ul className="message-list">
                    {this.props.messages.map((message, i) => (
                        <li className="message-item" key={i}>
                            <div className="message-item-user">
                                {message.user}
                            </div>
                            <div className="message-item-message">
                                {message.content}
                            </div>
                        </li>
                    ))}
                </ul>
            // </div>
        )
    }
}

export default MessagesList;