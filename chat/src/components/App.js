import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../base';
//css 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animations.css';

class App extends React.Component {
    state = {
        messages: {}
    }

    componentWillMount(){
        this.ref = base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }

    componentDidUpdate(){
        //Scroller en bas dès la MAJ
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    addMessage = message => {
        //copier le state
        const messages = {...this.state.messages};
        //On ajoute le messageavec une clé timestamp
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        //On suprime si plus de 10 messages
        Object
            .keys(messages) //on transforme en array
            .slice(0, -10) //on retire les 10 derniers message (qu'on veut donc garder)
            .map(key => messages[key] = null) // on réassigne à chaque clé restante dans le tableau la valeur "null" ce qui a pour effet de supprimer
        ;
        //On met à jour le state
        this.setState({messages});
    }

    isUser = (pseudo) => {
        return pseudo === this.props.params.pseudo;
    }
    
    render(){
        const messages = Object
            .keys(this.state.messages)
            .map(key => <Message key={key} details={this.state.messages[key]} isUser={this.isUser} />);
        console.log(messages);

        return (
            <div className="box">
                <div className="messages" ref={input => this.messages = input}>
                    <ReactCSSTransitionGroup 
                        component="div" 
                        className="message" 
                        transitionName="message" 
                        transitionEnterTimeout={200} 
                        transitionLeaveTimeout={200}
                    >
                        {messages}
                    </ReactCSSTransitionGroup>
                </div>
                <Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="140" />
            </div>
        )
    }
}

export default App;