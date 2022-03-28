import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Rating from "react-rating-stars-component";
import './Review.css';

const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-citadel-17218.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);

    return (
        <div>
            <Container>
                <h2 className="text-center my-4 fw-bold global-text">Our Customer Review</h2>
                <p className="text-center mb-5 banner-text mx-auto global-para">Satisfied Customer given their opinion about our services. Customer's satisfaction is out key to success.</p>
                <Carousel className="carousel-bg">
                    {
                        review.map(data => <Carousel.Item className="slider-height">
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
                        </Carousel.Item>)
                    }
                </Carousel>
                {/* <Row className="g-2">
                    {
                        review.map(data => <div
                            className="col-md-3"
                            key={data._id}
                        >
                            <div className="border p-2 rounded-3">
                                <h5>{data.name}</h5>
                                <p>"{data.comment}"</p>
                                <Rating
                                    edit={false}
                                    value={parseInt(data.rating)}
                                    count={5}
                                    size={20}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>)
                    }
                </Row> */}
            </Container>
        </div>
    );
};

export default Review;