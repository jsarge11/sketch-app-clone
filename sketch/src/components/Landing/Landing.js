import React, { Component } from 'react';
import './landing.css';

import Login from './Login/Login'
import Signup from './Signup/Signup'

class Landing extends Component {
  render() {
    return (
      <div>
        Landing
        <Login />
        <Signup />
      </div>
    );
  }
}

export default Landing;
