import logo from './logo.svg';
import React, { useState, useEffect, useCallback, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";

import { history } from "./helpers/history";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import User from './pages/User';
import { listUsers } from "./redux/actions/users";


function App() {

  const dispatch = useDispatch();
  useEffect((props) => {
    dispatch(listUsers());
  }, []);


  return (
    <Router history={history}>
      <Fragment>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/users"} className="navbar-brand">
            Proexe
          </Link>

          <Link to={"/users"} className="nav-link">
                Users
          </Link>
          
          
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/users" component={Home} />
            <Route exact path="/add-user" component={User} />
          </Switch>
        </div>

      </Fragment>
    </Router>
  );
}

export default App;
