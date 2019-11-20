import React, { Component } from 'react';
import Nav from '../../components/nav';
import Panel from '../../components/panel';

class Inicio extends Component {
    render() {
        return (
            <div className='view GRID' id='panel'>
                <Nav />
                <div id='container'>
                    container
                </div>
                <Panel />
            </div>
        );
    }
}

export default Inicio;
