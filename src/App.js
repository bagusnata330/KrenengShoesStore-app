import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./component/navbar";
// import Header from "./MarketComponent/Header";
import MainContent from "./MarketComponent/MainContent";
// import Footer from "./MarketComponent/Footer";
import DarkMode from "./component/DarkMode";

function App() {
  return (
    // <div>
    //   <Navbar/>
    //   <Header />
    //   <Footer/>
    //   <MainContent />
    // </div>

    <Router>
      <div>
      {/* <div className="container"> */}
        <div className="row">
          <Navbar />
        </div>
        <div style={{ marginTop: "3rem" }}>
          <Switch>
            {/* <Route exact path="/Home" component={Header} /> */}
            <Route exact path="/Home" component={MainContent} />
            <Route exact path="/Home/Dark_Mode" component={DarkMode} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
