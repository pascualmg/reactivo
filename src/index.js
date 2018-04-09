import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tank from './component/Tank';
import FunctionalTank from './component/FunctionalTank';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Tank/>, document.getElementById('tank'));

const FunctionalTankElement = <FunctionalTank material="aguica"/>;
ReactDOM.render(FunctionalTankElement , document.getElementById('functionalTank'));

registerServiceWorker();
