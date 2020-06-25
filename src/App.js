import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import MainContent from "./MarketComponent/MainContent";
import DarkMode from "./Dark-Mode/DarkMode";
import About from "./component/About";
import AddShoe from "./MarketComponent/AddShoe"



function App() {
  return (
    <Router>
      <div>
        <div className="row">
          <Navbar /> 
        </div>
        <div style={{ marginTop: "3rem" }}>
          <Switch>
            <Route exact path="/" component={AddShoe} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Dark_Mode" component={DarkMode} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
