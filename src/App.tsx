import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/header';
import Main from './components/main';
import About from './components/about';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/"  exact component={Main} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
