import React from 'react';
import { render } from 'react-dom';
//css
import './style/css/bootstrap.min.css';
import './index.css';
//js
import { sampleText } from './sampleText';
//import external libraries
import marked from 'marked';

class App extends React.Component {
    state = {
        text : sampleText
    }

    componentWillMount(){
        const localStorageText = localStorage.getItem('text');

        if(localStorageText){
            this.setState({text: localStorageText})
        }
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('text', nextState.text);
    }

    editText = e => {
        const text = e.target.value;
        this.setState({text});
    }

    renderText = (text) => {
        const renderText = marked(text,  {sanitize: true});
        return { __html: renderText }
    }

    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea 
                            className="form-control" 
                            name="" 
                            cols="30" 
                            rows="35" 
                            value={this.state.text} 
                            onChange={e=> this.editText(e)}
                        >
                        </textarea>
                    </div>
                    <div className="col-sm-6">
                        <h1>Résultats</h1>
                        <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
                    </div>
                </div>
            </div>
        )
    }
};

render(
    <App />,
    document.getElementById('root')
);