import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Label from './Components/Label/Label';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Label/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
