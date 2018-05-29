import React, { Component } from 'react';
import './signup.css';
import bcrypt from 'bcryptjs'

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
  }
  
  handleChange(field, e) {
    this.setState({ [`${field}`]: e })
  }

  signup() {
    
    let hash = bcrypt.hashSync(this.state.password, 10);
    let user = {
      email: this.state.username,
      username: this.state.username,
      password: hash
    }
    // ------------------- This will add the user to the database, and log them in ------------------- 
    //  axios.post('/user/signup', {user}).then( res => {
    //  this.props.updateUser( res )
    //  }).catch((error) => console.log(error))

  }

  render() {
    return (
      <div>
        <input type="text" placeholder="email" onChange={(e) => this.handleChange("email", e.target.value)} value={this.state.email}/>
        <input type="text" placeholder="username" onChange={(e) => this.handleChange("username", e.target.value)} value={this.state.username} />
        <input type="password" placeholder="password" onChange={(e) => this.handleChange("password", e.target.value)} value={this.state.password}/>
        <input type="password" placeholder="confirm password" onChange={(e) => this.handleChange("password", e.target.value)} value={this.state.confirmPassword}/>
        <button onClick={()=>this.signup()}> Signup </button>
      </div>
    );
  }
}

export default Signup;
