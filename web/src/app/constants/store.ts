import { createStore, Reducer } from 'redux';
import state from './state';
// import { Reducer } from 'react';

// interface 

const reducer: Reducer<any, any> = (stateData: any, action: any) => {
    return stateData;
};

export default createStore(reducer, state);
