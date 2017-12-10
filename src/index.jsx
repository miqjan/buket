import React from 'react';
import { render } from 'react-dom';
import { ProviderProps, Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Root from './routes/index.jsx';

import configureStore, { history } from './store/configureStore';

import '../public/css/index.scss';

const store = configureStore();
render(
    <Provider store={store} >
        <Router history={history}>
            <Root />
        </Router>
    </Provider>,
    document.getElementById('app')
);