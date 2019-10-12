import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import reducer from './store/reducers';
import Label from './Components/Label/Label';

const store=createStore(reducer);
console.log(store);

class App extends Component {
  render() {
    console.log(store);
    return (
      <Provider store={store}>
       <BrowserRouter>
        <div className="App">
          <Label/>
        </div>
       </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
