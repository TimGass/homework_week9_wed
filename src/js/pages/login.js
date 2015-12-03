import React, { PropTypes } from 'react';
import $ from "../jquery";

class Login extends React.Component {
  constructor(props){
    super(props)

    this.signIn = this.signIn.bind(this);
  }

  signIn(){
    let data = {username: this.refs.username.value, password: this.refs.password.value};
    $.ajax({
      url: 'https://api.parse.com/1/login?' + $.param(data),
      type: 'GET',
      success: (response) => { console.log(response);}
    });
  }

  componentDidMount(){

  }

  render () {
    return (
      <div>
        <h1>hello! Please log in!</h1>
        <input type="text" ref="username"/>
        <input type="password" ref="password"/>
        <input type="submit" id="submit" value="login" onClick={this.signIn}/>
      </div>
    );
  }
}

export default Login;
