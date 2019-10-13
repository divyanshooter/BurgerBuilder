import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import burgerBuilder from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import Label from './Components/Label/Label';


const rootReducer=combineReducers({
  burgerBuilder:burgerBuilder,
  order:orderReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));


class App extends Component {
  render() {
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
