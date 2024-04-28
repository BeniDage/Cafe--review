import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <div className="search-container">
        <div className="nav-bar">
          <h1>SipScore</h1>
        </div>
        <h1>find the best cafe in town</h1>
        <input
          type="text"
          className="search-box"
          placeholder="Search for restaurants..."
        />
        <button className="search-button">Search</button>
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
