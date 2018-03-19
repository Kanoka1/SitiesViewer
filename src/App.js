import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SitesView from './Components/SitiesViewComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SitesView />
      </div>
    );
  }
}

export default App;
