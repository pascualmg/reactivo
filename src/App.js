import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoGrid from "./PhotoGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Trasteando React</h1>
        </header>
        <p className="App-eintro">
            Escribe aquí cosicas:<PhotoGrid/>
        </p>
      </div>
    );
  }
}

export default App;
