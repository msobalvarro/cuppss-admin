import React, { Component } from 'react';
import './panel.scss';

interface NotificationObject {
    name: string;
    description: string;
}

interface MessagesObject {
    count: number;
    message: string;
}

interface DefaultState {
    notifications?: Array<NotificationObject>;
    messages?: Array<MessagesObject>;
}

class Panel extends Component<any, DefaultState> {
    state: DefaultState = {
        messages: [],
        notifications: [],
    };

    render() {
        return (
            <div id='panel'>
                <h2></h2>
                <div className='row notfication'>
                    <h3>Notificaciones</h3>

                    <div className='item'>
                        Notification item
                    </div>

                    <div className='item'>
                        Notification item
                    </div>

                    <div className='item'>
                        Notification item
                    </div>
                </div>

                <div className='row message'>
                    <h3>Mensajes</h3>

                    <div className='item'>
                        Mensaje item
                    </div>

                    <div className='item'>
                        Mensaje item
                    </div>

                    <div className='item'>
                        Mensaje item
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;
