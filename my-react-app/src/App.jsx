import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";
import Searchbox from "./Searchbox";

function App() {
  return (
    <div className="App">
      <div className="search-container">
        <div className="nav-bar">
          <h1>SipScore</h1>
        </div>
        <h1>find the best cafe in town</h1>
        
        <Searchbox />
        
      </div>

      <div className="restaurant-container">
        <h2>Recently Reviewed Restaurants</h2>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
