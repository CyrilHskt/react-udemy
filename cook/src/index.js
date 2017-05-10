import React from 'react';
import { render } from 'react-dom';
//components
import Connexion from './components/Connexion';
import App from './components/App';
import NotFound from './components/NotFound';
//router
import { BrowserRouter, Match, Miss } from 'react-router';
//css
import './index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern ="/" component={Connexion} />
                <Match pattern ="/box/:pseudo" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(
    <Root />,
    document.getElementById('root')
)