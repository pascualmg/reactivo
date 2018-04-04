import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  console.log('we');//TODO: borrame.

    document.mierdaconpasta = 'ahora si me defino';
    var booleAno = document.hasOwnProperty.call(document, 'mierdaconpasta');

    console.log('tengo mierda con pasta', booleAno);//TODO: borrame.


  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
