import React, { Component } from 'react';
import './landing.css';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getUser } from '../../ducks/usersReducer'
import axios from 'axios'

class Landing extends Component {
  componentDidMount() {
    axios.get('/user/auth').then(res => {
      this.props.getUser(res.data);
    })
  }
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

export default connect(mapStateToProps, {getUser} )(Landing);
