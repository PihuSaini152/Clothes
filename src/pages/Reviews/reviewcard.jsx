import React from "react";
import "./review.css";
import { FaStar } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";

const reviews = [
  {
    rating: 4.5,
    name: "Samantha D.",
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    rating: 4.5,
    name: "Alex M.",
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
  },
  {
    rating: 4.5,
    name: "Olivia P.",
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear.",
    date: "August 17, 2023",
  },
  {
    rating: 4.5,
    name: "Ethan R.",
    text: "The t-shirt is a must-have for anyone who appreciates good design. The layout of the design makes this shirt a standout piece.",
    date: "August 16, 2023",
  },
  {
    rating: 4.5,
    name: "Liam K.",
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill.",
    date: "August 18, 2023",
  },
  {
    rating: 4.5,
    name: "Ava H.",
    text: "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The minimalistic yet stylish pattern caught my eye instantly.",
    date: "August 19, 2023",
  },
];

const ReviewCard = () => {
  return (
    <div className="review-container">
      <div className="tabs">
        <p>Product Details</p>
        <p className="active">Rating & Reviews</p>
        <p>FAQs</p>
      </div>

      <div className="review-top-bar">
        <h2>All Reviews <span>(451)</span></h2>
        <div className="right-controls">
          <div className="filter">
            <FaSlidersH className="filter-icon" />
            <select>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className="write-review-btn">Write a Review</button>
        </div>
      </div>

      <div className="review-cards">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className={i < Math.round(review.rating) ? "star filled" : "star"} />
              ))}
            </div>
            <h3>{review.name}</h3>
            <p className="review-text">"{review.text}"</p>
            <p className="date">Posted on {review.date}</p>
          </div>
        
        ))}
      </div>
      <button id="more">Load More Reviews</button>
    </div>
  );
};

export default ReviewCard;

