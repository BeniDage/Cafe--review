import React from "react";
import "./Searchbox.css";
function Searchbox() {
  return (
    <div className="search-box-container">
      <div className="search-2">
        <input
          type="text"
          className="search-box"
          placeholder="Search for restaurants..."
        />
        <div className="search-icon"></div>
        
      </div>
    </div>
    
  );
}
export default Searchbox;
