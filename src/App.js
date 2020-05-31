import React from 'react';
import './App.css';
import Header from "./MarketComponent/Header"
import MainContent from "./MarketComponent/MainContent"
import Footer from "./MarketComponent/Footer"

function App() {
  return (
    <div className="container">
      <Header />
      <Footer />
      <MainContent />
    </div>
  );
}

export default App;
