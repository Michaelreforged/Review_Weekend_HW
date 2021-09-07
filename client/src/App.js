import React from "react";
import Computers from "./Components/Computers"
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";

function App() {
  return (

    <div>
      <h1>Review Homework</h1>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/computers" component={Computers} />
      </Switch>
    </div>
  );
};

export default App;
