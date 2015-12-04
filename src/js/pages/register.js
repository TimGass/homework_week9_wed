import React from 'react';

import $ from "../jquery";
import {Link} from "react-router";

class Register extends React.Component {
  constructor(props){
    super(props)

    this.register = this.register.bind(this);
  }

  register(){
    if(this.refs.password.value === this.refs.passwordConfirm.value){
      let data = {username: this.refs.username.value, password: this.refs.password.value};
    }
    else {
      alert("Passwords do not match!");
    }
  }

  render () {
    return (
      <div>
        <h1>Hello! Please sign up!</h1>
        <input type="text" ref="username"/>
        <input type="password" ref="password"/>
        <input type="password" ref="passwordConfirm" />
        <input type="submit" id="submit" value="login" onClick={this.register}/>
        <Link to={"login"}>Already a user?</Link>
      </div>
    );
  }
}

export default Register;
