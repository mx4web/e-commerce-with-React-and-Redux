import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

//BrowserRouter is a component which gives App component all of the functionalities of routing
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* wrap our app in PersistGate to have our app has the access to the presistance flow */}
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
