import React, { PropTypes } from 'react';
import $ from "../jquery";
import {Link} from "react-router";

import User from "../Models/user";

class Login extends React.Component {
  constructor(props){
    super(props)

    this.signIn = this.signIn.bind(this);
  }

  signIn(){
    let data = {username: this.refs.username.value, password: this.refs.password.value};
    User.signIn(data);
  }

  render () {
    return (
      <div>
        <h1>Hello! Please log in!</h1>
        <input type="text" ref="username"/>
        <input type="password" ref="password"/>
        <input type="submit" id="submit" value="login" onClick={this.signIn}/>
        <Link to={"register"}>Sign up!</Link>
      </div>
    );
  }
}

export default Login;
