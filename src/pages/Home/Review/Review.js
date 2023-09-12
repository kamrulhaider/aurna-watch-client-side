import React, { useEffect, useState } from "react";
import { Carousel, Container, Spinner } from "react-bootstrap";
import Rating from "react-rating-stars-component";
import "./Review.css";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://aurna-watch-server-side.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <Container>
        <h2 className="text-center my-4 fw-bold global-text">
          Our Customer Review
        </h2>
        <p className="text-center mb-5 banner-text mx-auto global-para">
          Satisfied Customer given their opinion about our services. Customer's
          satisfaction is out key to success.
        </p>
        {review.length === 0 ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <Carousel className="carousel-bg">
            {review.map((data) => (
              <Carousel.Item key={data.name} className="slider-height">
                <div className="review-details m-auto py-4 px-2 rounded-3 d-flex align-items-center flex-column">
                  <h3 className="text-dark">{data.name}</h3>
                  <p className="text-muted">"{data.comment}"</p>
                  <Rating
                    edit={false}
                    value={parseInt(data.rating)}
                    count={5}
                    size={20}
                    activeColor="#518C91"
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Container>
    </div>
  );
};

export default Review;
