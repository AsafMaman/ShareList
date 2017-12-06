import React, { Component } from 'react';
import createStore,{history as hs} from './store';
import {Provider} from 'react-redux';
import {Route,Switch} from 'react-router-dom';
import { ConnectedRouter} from 'react-router-redux';

import Login from './containers/login';
import Authorization from './containers/Authorization';
import Shared from './containers/shared';

// import logo from './logo.svg';
import './App.css';


const store=createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ConnectedRouter history={hs}>
        <Switch>
          <Route path="/Login"  exact component={Login}/>
          {/* <Route path="/" exact component={Login}/> */}
          
          <Authorization path="/" component={Shared}/>
        </Switch>
      </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
