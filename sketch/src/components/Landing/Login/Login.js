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
      let { data } = res;
      let success = bcrypt.compareSync(password, data.password);
      document.getElementById("log-alert").innerHTML = "";

      if (success) {
        axios.post('/user/session', {data}).then(() => {
          document.getElementById("log-alert").innerHTML = "";
          //reducer function
        }).catch(error => document.getElementById("log-alert").innerHTML = error.response)
      }
      else {
        document.getElementById("log-alert").innerHTML = "Password does not match.";
      }
    }).catch((error) => document.getElementById("log-alert").innerHTML = error.response.data)
  }

  render() {
    return (
      <div id="log-wrapper">
        <input type="text" placeholder="email" onChange={(e) => this.handleChange("email", e.target.value)} value={this.state.email}/>
        <input type="password" placeholder="password" onChange={(e) => this.handleChange("password", e.target.value)} value={this.state.password}/>
        <button onClick={()=>this.login()}> Login </button>
        <p className="alert" id="log-alert"></p>
      </div>
    );
  }
}

export default Login;
