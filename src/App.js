import React, { Component } from 'react';
import Home from './pages/Home/home';
import { BroswerRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component{
  render(){
    return(
      <Router>
      <div className="App">
        <Home />
      </div>
      </Router>
    )
  }
};

export default App;