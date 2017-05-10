import React from 'react';

class App extends React.Component {
    render(){
        return (
            <div className="box">
                <Header pseudo={this.props.params.pseudo} />
                <div className="cards">
                    <div className="card"></div>
                </div>
            </div>
        )
    }


    static propTypes = {
        params: React.PropTypes.object.isRequired
    }
}

export default App;