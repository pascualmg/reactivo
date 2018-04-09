import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tank from './component/Tank';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Tank/>, document.getElementById('tank'));


function FunctionalTank(props) {
  console.log('pués me estoy ejecutando macho...',props );//TODO: borrame.
  const info =
    <div className="tankInfo">
      El tanke tiene:{props.material}
      le cogen : {props.maxCapacity}
      Contenido actual: {props.actualQuantity}
      Está ahora mismo al : {(props.actualQuantity / props.maxCapacity) * 100} %
    </div>;

  const bar =
    <progress className={"tankBar"} max={props.maxCapacity} value={props.actualQuantity}>
    </progress>;

  const Tank =
    <div className={"Tank"}>
      {bar}
      {info}
    </div>;

  return Tank;
};
const FunctionalTankElement = <FunctionalTank material="aguica"/>;
ReactDOM.render(FunctionalTankElement , document.getElementById('functionalTank'));

registerServiceWorker();
