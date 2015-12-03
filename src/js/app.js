import React from 'react';
import ReactDOM from "react-dom";
import {Router, Route} from "react-router";

import NotFound from "./notfound";
import Yolo from "./yolo";
import Login from "./pages/login";
import $ from "jquery";

class App extends React.Component {

  render () {
    return(
      <div>
      <header>
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
    <Route path="/" component={App} >
      <Route path="login" component={Login} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
),
  document.getElementById("main")
);

export default App;
