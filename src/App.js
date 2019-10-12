import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import reducer from './store/reducers/burgerBuilder';
import Label from './Components/Label/Label';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)));


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
