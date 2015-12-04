import React from 'react';
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute} from "react-router";

import NotFound from "../pages/notfound";
import Login from "../pages/login";
import Home from "../pages/home";
import Register from "../pages/register";
import $ from "../jquery";

class App extends React.Component {

  render () {
    return(
      <div>
      <header>
        <h3>Bring The Band!</h3>
        <a href="#/login">Log In</a>
      </header>
      <div>
        {this.props.children}
      </div>
      </div>
    );
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
),
  document.getElementById("main")
);

export default App;
