import React from 'react';

class Connexion extends React.Component {
goToChat = event => {
    event.preventDefault();
    const pseudo = this.pseudoInput.value;
    this.context.router.transitionTo(`/pseudo/${pseudo}`);
};

    render(){
        return (
            <div className="connexionBox">
                <form action="" className="connexion" onSubmit={e => this.goToChat(e)}>
                    <input 
                        type="text" 
                        placeholder="Pseudo" 
                        required 
                        ref={input => {
                            this.pseudoInput = input
                        }}
                    />
                    <button type="submit">GO !</button>
                </form>
            </div>
        )
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
}

export default Connexion;