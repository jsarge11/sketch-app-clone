import React, { Component } from 'react';
import './login.css';
import bcrypt from 'bcryptjs'
import axios from 'axios'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
  }
  
  handleChange(field, e) {
    this.setState({ [`${field}`]: e })
  }

  login() {
    let { email, password } = this.state;

    let user = {
      email: email,
    }
    this.setState({ email: '', 
                    password: '' })
                    
    axios.post('/user/login', {user}).then( res => {
      console.log(res.data);
      let success = bcrypt.compareSync(password, res.data);
      if (success) {
        alert("logged in!");
      }
      else {
        alert("incorrect password or email");
      }
    }).catch((error) => console.log(error))
  }

  render() {
    return (
      <div id="log-wrapper">
        <input type="text" placeholder="email" onChange={(e) => this.handleChange("email", e.target.value)} value={this.state.email}/>
        <input type="password" placeholder="password" onChange={(e) => this.handleChange("password", e.target.value)} value={this.state.password}/>
        <button onClick={()=>this.login()}> Login </button>
      </div>
    );
  }
}

export default Login;
