import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends Component {
    render() {
        return (
            <span>Test</span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
