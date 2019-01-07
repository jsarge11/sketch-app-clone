import React from 'react';
import './header.css';
import logo from '../../../assets/header.svg';
import { Link } from 'react-router-dom'

function Header() {
    return (
      <header id="hea-menu">
        <Link to="/"><img id="hea-logo" src={logo} height="24px" alt="logo" /></Link>
        <ul>
          <Link to="/test"><li style={{color: 'rgba(255,255,255,0.85)'}}> Test Me! </li></Link>
          <Link to="/signup"><li style={{color: 'rgba(255,255,255,0.85)'}}>Sign Up </li></Link>
          <Link to="/login"><li style={{color: 'rgba(255,255,255,0.85)'}}>Log In </li></Link>
          <li>Try for Free &#8595;</li>
        </ul>
      </header>
    );
}

export default Header;
