import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const fName = "Deepak Saini";
const today = new Date();
const todayDate = today.toLocaleDateString();
const todayTime = today.toLocaleTimeString();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
