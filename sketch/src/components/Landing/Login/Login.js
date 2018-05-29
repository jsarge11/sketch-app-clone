import React, { Component } from 'react';
import './login.css';
import bcrypt from 'bcryptjs'
import axios from 'axios'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }
  
  handleChange(field, e) {
    this.setState({ [`${field}`]: e })
  }

  login() {
    let { username, password } = this.state;

    let user = {
      username: username,
    }
    axios.get('/user/login', {user}).then( res => {
      let success = bcrypt.compareSync(password, res.data.hash);
      if (success) {
        console.log("success");
      }
      else {
        console.log("fail");
      }
    }).catch((error) => console.log(error))
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="username" onChange={(e) => this.handleChange("username", e.target.value)} value={this.state.username}/>
        <input type="password" placeholder="password" onChange={(e) => this.handleChange("password", e.target.value)} value={this.state.password}/>
        <button onClick={()=>this.login()}> Login </button>
      </div>
    );
  }
}

export default Login;
