import React from 'react';
import './Card.css';
function Card() {
  return (
    <div className="restaurant">
      <div className="card-image"></div>
      <div className="card-text-container">
        <div className="card-text-div">
          <div className="cafe-shop-name">ABC 1</div>
          <div className="review-rate">Rating: 4.5</div>
          <div className="cafe-address">Address: 123 Main St.</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
