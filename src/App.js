import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Photo';
import Photo from "./Photo";
import PhotoGrid from "./PhotoGrid";
import Tank from "./component/Tanque";
class App extends Component {
  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Trasteando React</h1>
      </header>
        <Tank
          unitMeassure={"litro"}
          material={"water"}
          maxCapacity={101}
          actualQuantity={42}
        />
    </div>;
  }
}

export default App;
