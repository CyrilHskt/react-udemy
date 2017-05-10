import React from 'react';

class Admin extends React.Component {
    render() {
        return (
            <div className="cards">
                <footer>
                    <button onClick={this.props.chargerExemple}>Remplir</button>
                </footer>
            </div>
        );
    }
    static propTypes = {
        chargerExemple: React.PropTypes.func.isRequired
    }
}

export default Admin;