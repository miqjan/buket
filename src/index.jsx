import React from 'react';
import { render } from 'react-dom';
import { ProviderProps, Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import configureStore, { history } from './store/configureStore';
//import Root from './routes/index';

const store = configureStore();
render(
    <Provider store={store} >
        <Router history={history}>
           { /*<Root />*/}
           <div><h1>REDY</h1></div>
        </Router>
    </Provider>,
    document.getElementById('app')
);