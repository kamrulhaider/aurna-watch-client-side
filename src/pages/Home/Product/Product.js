import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, img, name, details, price } = props.product;

    return (
        <div>
            <Col>
                <Card className="service border-0">
                    <div className="d-flex w-100 justify-content-center">
                        <Card.Img className="service-img" variant="top" src={img} />
                    </div>
                    <Card.Body className="service-body">
                        <Card.Title className='card-title'>{name}</Card.Title>
                        <Card.Text className="card-para">
                            {details.slice(0, 100)}...
                        </Card.Text>
                        <h5 className='product-price'>Price: $ {price}</h5>
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-outline-light">Order Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Product;