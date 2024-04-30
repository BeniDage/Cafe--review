import React, { useState } from "react";
import "./Searchbox.css";

function Searchbox() {
  const [city, setCity] = useState("");
  const [cafes, setCafes] = useState([]);

  const handleSearch = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const request = {
      query: `cafe in ${city}`,
      fields: ["name", "formatted_address", "rating", "reviews"],
      key: apiKey,
    };

    console.log("Sending text search request:", request); // Log the text search request

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    service.textSearch(request, (results, status) => {
      console.log("Text search response status:", status); // Log the status of the text search response

      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log("Received text search results:", results); // Log the text search results
        setCafes(results);
      } else {
        console.error("Text search request failed with status:", status); // Log error if text search request failed
      }
    });
  };

  return (
    <div className="search-box-container">
      <div className="search-2">
        <input
          type="text"
          className="search-box"
          placeholder="Search for restaurants..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="search-icon" onClick={handleSearch}></div>
      </div>
      <div className="cafe-list">
        {cafes.map((cafe) => (
          <div className="cafe" key={cafe.place_id}>
            <h3>{cafe.name}</h3>
            <p>{cafe.formatted_address}</p>
            {cafe.rating && <p>Rating: {cafe.rating}</p>}
            {cafe.reviews && (
              <ul>
                {cafe.reviews.map((review, index) => (
                  <li key={index}>
                    <p>{review.text}</p>
                    <p>Rating: {review.rating}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searchbox;
