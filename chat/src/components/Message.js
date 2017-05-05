import React from 'react';

class Message extends React.Component {
    render(){
        return (
            <div>
                <p className="user-Message">
                    {this.props.pseudo}: Mon super message !
                </p>
            </div>
        )
    }
}

export default Message;