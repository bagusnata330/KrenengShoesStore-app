import React from "react";
import ToggleDM from "./ToggleDM";

function Header() {
  return (
    <div>
      <header className="market-header flaming">
        <br />
        <h1 className="flaming">Muvesuna Shoe Store</h1>
        <h3>All the shoes come straight from China</h3>
      </header>
      
      <div>
        <ToggleDM />
      </div>
    </div>
  );
}

export default Header;
