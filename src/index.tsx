import React from 'react'
import ReactDOM from 'react-dom'
import {App} from "./View/App/App";
import styles from './Index.module.css'
import {Provider} from "react-redux";
import {store} from "./store";

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <div className={styles.body}>
            <App />
        </div>
    </Provider>,
    rootElement
);