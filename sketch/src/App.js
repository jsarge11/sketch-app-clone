import React, { Component } from 'react';
import routes from './routes'
import './app.css'
import Header from './components/Landing/Header/Header';
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      {this.props.location.pathname !== '/sketchpad' ? <Header /> : ''}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
