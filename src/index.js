import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from './redux/store/store';
import { increment } from './redux/actions/actions';

const root = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}><App/></Provider>, root)

serviceWorker.unregister();

// store.dispatch(	increment({incrementBy: 2 }) );