import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();

    if (products.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div className="my-5">
            <Container>
                <h3 className="text-center mb-2 fw-bold">Products List</h3>
                <p className="text-center mb-5">We’re all so digital, but the ’50s was the era of watches you had to wind. When Sir Edmund Hillary and Tenzing Norgay reached the summit of Everest in 1953, Hillary was equipped with a Rolex Oyster Perpetual.– Sara Sheridan</p>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product._id}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;