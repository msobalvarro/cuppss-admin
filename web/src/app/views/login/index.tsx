import React, { Component } from 'react';
import logo from '../../../assets/images/logo/logo-oficial.png';
import './login.scss';

interface DefaultState {
    loader: boolean;
}

class Login extends Component<any, DefaultState> {
    state: DefaultState = {
        loader: false,
    };

    render() {
        return (
            <div className='view' id='login'>
                <div className='container'>
                    <figure>
                        <img src={logo} alt='logo' />
                    </figure>

                    <div className='row'>
                        <input type='text' className='text-input' placeholder='Usuario' />
                    </div>

                    <div className='row'>
                        <input type='password' className='text-input' placeholder='contraseña' />
                    </div>

                    <div className='row space'>
                        <a href='#'>Recuperar contraseña</a>
                        <button className='button'>Login</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;
