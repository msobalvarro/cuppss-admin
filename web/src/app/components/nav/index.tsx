import React, { Component } from 'react';
import './nav.scss';
import store from '../../constants/store';

interface DefaultState {
    title: string;
}

class Nav extends Component<any, DefaultState> {
    state: DefaultState = {
        title: '',
    };

    componentWillMount() {
        this.setState({
            title: store.getState().title
        });
    }

    render() {
        return (
            <nav id='nav'>
                {this.state.title}
            </nav>
        );
    }
}

export default Nav;
