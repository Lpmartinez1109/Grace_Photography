import React, { Component } from 'react';
import Home from './pages/Home/home';
import Works from './pages/Works/works';
import Contact from './pages/Contact/contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component{
  render(){
    return(
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/works" component={ Works } />
          <Route exact path="/contact" component={ Contact } />
        </Switch>
      </div>
      </Router>
    )
  }
};

export default App;