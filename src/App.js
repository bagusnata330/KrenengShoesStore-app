import React from 'react';
import './App.css';
import Header from "./MarketComponent/Header"
import MainContent from "./MarketComponent/MainContent"
import Footer from "./MarketComponent/Footer"

function App() {
  return (
    <div className="container">
        <Header />
        <MainContent />
        <Footer />
    </div>
  );
}

export default App;
