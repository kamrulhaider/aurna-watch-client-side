import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, img, name, details, price } = props.product;
    return (
        <div>
            <Col>
                <Card className="service p-2">
                    <div className="d-flex w-100 justify-content-center">
                        <Card.Img className="service-img" variant="top" src={img} />
                    </div>
                    <Card.Body className="service-body">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details.slice(0, 100)}...
                        </Card.Text>
                        <h5>Price: {price}</h5>
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-outline-dark">Order Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Product;