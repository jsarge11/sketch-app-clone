import React, { Component } from 'react';
import './landing.css';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Landing extends Component {
  render() {
    if (this.props.user.id) {
      return <Redirect push to="/sketchpad" />
    }
    return (
      <div id="lan-wrapper">
        <h1 id="lan-header-text">Sketch. The digital design toolkit</h1>
        <h2 id="lan-sub-text">Sketch is a digital design toolkit built to help you create your best work — from early ideas, through to final assets.</h2>
      </div>
    );
  }
}
function mapStateToProps(state) {
  let { user } = state.users;
  return {
    user
  }
}

export default connect(mapStateToProps)(Landing);
