import React from 'react';

class Formulaire extends React.Component {
    render(){
        return (
            <div>
                <form action="" className="form">
                    <textarea required maxLength="140"></textarea>
                </form>
                <div className="info">140</div>

                <button type="submit">Envoyer !</button>
            </div>
        )
    }
}

export default Formulaire;