import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tank from './component/Tank';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Tank />, document.getElementById('tank'));
registerServiceWorker();
