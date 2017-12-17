import React from 'react';
import { render } from 'react-dom';
import { ProviderProps, Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Root from './routes/index.jsx';

import configureStore, { history } from './store/configureStore';
import Alert from 'react-s-alert';

import '../public/css/index.scss';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-default.css';

const store = configureStore();
render(
    <div>
        <Provider store={store} >
            <Router history={history}>
                <Root />
            </Router>
        </Provider>
        <Alert position='bottom' timeout={3000} effect='flip'/>
    </div>
    ,
    document.getElementById('app')
);