import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import UserInfo from "./user/UserInfo";
import Home from "./home/Home";
import Header from "./header/Header";
import About from "./home/About";

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/dashboard" exact component={UserInfo} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
