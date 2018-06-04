import React, { Component } from 'react';
import './landing.css';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getUser } from '../../ducks/usersReducer'
import axios from 'axios';
import {Parallax} from 'react-parallax';
import frame from '../../assets/hero-sketch-frame.png';
import content from '../../assets/hero-sketch-content.jpg';
import {Link} from 'react-router-dom';

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
        <div style = {{height: 'auto', width: 'auto'}}>
        <div style ={{position: 'relative', width: '99.99%', height: 604.98, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: 50, borderRadius: 3}}>
            <img src = {frame} alt = "frame" style ={{height: 604.98, width: 967.98, position: 'absolute', zIndex: 2, borderRadius: 3}}/>
            <Parallax bgImage = {content} style ={{position: 'absolute', width: 968, height: 981, zIndex: 1, top: 220}} strength = {-300}>

            </Parallax>
        </div>
        <div style ={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', width: '100%', marginTop: 50}}>
        <div style ={{display: 'flex', alignItems: 'center'}}>
          <Link to="/signup"><button className = "lan-login-btn">Sign Up </button ></Link>
          <p style ={{color: 'white'}} className ="or">Or</p>
          <Link to="/login"><button className = "lan-login-btn">Log In </button></Link>  
        </div>

        </div>


        </div>
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
