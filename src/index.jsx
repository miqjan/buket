import React from 'react';
//import { render } from 'react-dom';
import { ProviderProps, Provider } from 'react-redux';
import { Router,render } from 'react-router-dom';

//import { ConnectedRouter } from 'react-router-redux';

//import configureStore, { history } from './store/configureStore';
//import Root from './routes/index';


const store = configureStore();


render(
    <Provider store={store} >
        <Router history={history}>
            <Root />
        </Router>
    </Provider>,
    document.getElementById('app')
);