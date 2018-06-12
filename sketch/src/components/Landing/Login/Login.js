import React, { Component } from 'react';
import './login.css';
import bcrypt from 'bcryptjs'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser } from '../../../ducks/usersReducer'
import { Redirect } from 'react-router-dom'

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
        axios.post('/user/session', { data }).then(res => {
          document.getElementById("log-alert").innerHTML = "";
          this.props.getUser(res.data);
        }).catch(error => document.getElementById("log-alert").innerHTML = error.response)
      }
      else {
        document.getElementById("log-alert").innerHTML = "Password does not match.";
      }
    }).catch((error) => document.getElementById("log-alert").innerHTML = error.response.data)
  }

  render() {
    if (this.props.user.id) {
      return <Redirect push to="/sketchpad" />
    }

    return (
      <div id="log-wrapper">
        <input className="landing-login" type="text" placeholder="email" onChange={(e) => this.handleChange("email", e.target.value)} value={this.state.email}/>
        <input className="landing-login" type="password" placeholder="password" onChange={(e) => this.handleChange("password", e.target.value)} value={this.state.password}/>
        <button className="landing-button" onClick={()=>this.login()}> Login </button>
        <p className="alert" id="log-alert"></p>
      </div>
    );
  }
}
function mapStatetoProps(state) {
  let { user } = state.users;
  return {
    user
  }
}

export default connect(mapStatetoProps, {getUser})(Login);
