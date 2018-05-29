import React, { Component } from 'react';
import './login.css';
import bcrypt from 'bcryptjs'

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
    let hash = bcrypt.hashSync(this.state.password, 10);
    let user = {
      username: this.state.username,
      password: hash
    }
    // axios.post('/user/login', {user}).then( res => {
    // this.props.updateUser( res )
    //}).catch((error) => console.log(error))
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
