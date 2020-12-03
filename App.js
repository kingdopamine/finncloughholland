import React from 'react';
import logo from './logo.svg';
import './App.css';

import Portfolio from './components/Portfolio/Portfolio'
import Bio from './components/Bio/Bio'
import Contact from './components/Contact/Contact'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component{
  render(){
   
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Portfolio/>
            </Route>
            <Route exact path="/bio">
              <Bio/>              
            </Route>
            <Route exact path="/contact">
              <Contact/>              
            </Route>
          </Switch>
        </div>
      </Router>


    );
  }
  
}

export default App;
document.oncontextmenu = new Function("return false;");
