import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Rating from "react-rating-stars-component";

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
                <h3 className="text-center my-3 fw-bold">Our Customer Review</h3>
                <Row className="g-2">
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
                </Row>
            </Container>
        </div>
    );
};

export default Review;