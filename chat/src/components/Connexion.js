import React from 'react';

class Connexion extends React.Component {
    render(){
        return (
            <div className="connexionBox">
                <form action="" className="connexion">
                    <input type="text" placeholder="Pseudo" required />
                    <button type="submit">GO !</button>
                </form>
            </div>
        )
    }
}

export default Connexion;