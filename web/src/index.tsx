import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Login from './app/views/login';
import Inicio from './app/views/inicio';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>

                    <Route path='/'>
                        <Inicio />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
