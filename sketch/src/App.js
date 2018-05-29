import React, { Component } from 'react';
import routes from './routes'


class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
