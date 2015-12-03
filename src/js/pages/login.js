import React, { PropTypes } from 'react';
import $ from "jquery";

class Login extends React.Component {
  componentDidMount(){
    $.ajaxSetup({
      headers: {
        "X-Parse-Application-Id": "4JE04xPGg0hd5w0dmK0R6sFZAdkH01DkDIHSyGjq",
        "X-Parse-REST-API-Key": "O2ial7QRckDEHxYe86yw2M7ygviAtFVfYuvrn8hB",
        }
      });
    $.ajax({
      url: 'https://api.parse.com/1/login?' + $.param({username:"tearsforfears", password:"tears"}),
      type: 'GET',
      success: (response) => { console.log(response);}
    });
  }

  render () {
    return (<h1>hello!</h1>);
  }
}

export default Login;
