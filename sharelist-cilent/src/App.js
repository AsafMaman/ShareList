import React, { Component } from 'react';
import createStore,{history as hs} from './store';
import {Provider} from 'react-redux';
import {Route,Switch} from 'react-router-dom';
import { ConnectedRouter} from 'react-router-redux';

import Login from './containers/login';
import Authorization from './containers/Authorization';
import Lists from './containers/Lists';

// import logo from './logo.svg';
import './App.css';


const store=createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ConnectedRouter history={hs}>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Login"  exact component={Login}/>
          <Authorization path="/app" component={Lists}/>
        </Switch>
      </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
