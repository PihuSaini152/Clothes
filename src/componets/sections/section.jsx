import React from 'react';
import './section.css';

const testimonials = [
  {
    name: "Sarah M.",
    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    stars: 5,
  },
  {
    name: "Alex K.",
    review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    stars: 5,
  },
  {
    name: "James L.",
    review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    stars: 5,
  },
];

function TestimonialSection() {
  return (
    <div className="testimonial-section">
      <h2 className="section-title">OUR HAPPY CUSTOMERS</h2>
      <div className="testimonial-cards">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <h3 className="name">{item.name} <span className="verified">✔</span></h3>
            <p className="review">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;
