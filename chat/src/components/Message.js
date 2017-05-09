import React from 'react';

class Message extends React.Component {
    render(){
        return (
            <div>
                <p className="user-Message">
                    {this.props.details.pseudo}: {this.props.details.message}
                </p>
            </div>
        )
    }
}

export default Message;