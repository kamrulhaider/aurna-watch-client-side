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
                <h3 className="text-center mb-2 fw-bold">Service List</h3>
                <p className="text-center mb-5">Atlantic Cliff uses an artificial intelligence based system that tracks real-time data ensuring fast delivery. Whether your delivery is for your customer or someone you care for, we will deliver it with care.</p>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product._id}
                        ></Product>)
                    }
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Products;