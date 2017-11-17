import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));

registerServiceWorker();
