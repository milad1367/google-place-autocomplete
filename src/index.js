import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Main from './containers/Main'
const rootElement = document.getElementById('root');

const store = createStore(reducer,
    applyMiddleware(thunk)
    );
//store.subscribe(()=>console.log(store.getState()));
ReactDOM.render(
    <Provider store={store}>
       <Main />
       
    </Provider>,
    rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
