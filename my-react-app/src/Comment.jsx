import React, { useState } from "react";
import "./Comment.css";

function Comment() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      setComments([{ text: comment, stars: rating }, ...comments]);
      setComment("");
      setRating(0);
    }
  };

  return (
    <div className="comment-container">
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="star-rating-div">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onChange={handleRatingChange}
                />
                {ratingValue <= rating ? (
                  <img
                    src="./assets/gold-star.svg"
                    alt="star"
                    className="gold-star"
                  />
                ) : (
                  <img
                    src="./assets/gray-star.svg"
                    alt="star"
                    className="star"
                  />
                )}
              </label>
            );
          })}
        </div>
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="Share your experience.."
        />
        <button type="submit">Post Review</button>
      </form>
      <div>
        {comments.map((c, index) => (
          <div className="comment" key={index}>
            <div>
              {[...Array(Math.round(c.stars))].map((_, i) => (
                <img
                  key={i}
                  src="./assets/gold-star.svg"
                  alt="star"
                  className="gold-star"
                />
              ))}
              {[...Array(5 - Math.round(c.stars))].map((_, i) => (
                <img
                  key={i}
                  src="./assets/gray-star.svg"
                  alt="star"
                  className="star"
                />
              ))}
            </div>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
