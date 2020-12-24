import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Link, Switch, BrowserRouter as Router} from "react-router-dom"
import { NotFound } from "./components/NotFound";
import { VisitUs } from "./components/VisitUs";
import { User } from "./components/User";


const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to="/">
          Home
        </Link></li>
        <li><Link to="/user">
          User
        </Link></li>
        <li><Link to="/visitus">
          Visit
        </Link></li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/visitus" component={VisitUs}/>
      <Route path="/user" component={User}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>

) 

ReactDOM.render(
  routing,
  document.getElementById('root')
);

