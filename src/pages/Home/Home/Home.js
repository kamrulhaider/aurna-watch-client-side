import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Review from '../Review/Review';
import Footer from '../../../pages/Shared/Footer/Footer'
import Featured from '../Featured/Featured';

const Home = () => {
    const [products] = useProducts();

    const slicedProduct = products.slice(0, 6);

    if (products.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }

    return (
        <div>
            <Banner></Banner>
            <Container>
                <h3 className="text-center my-3 fw-bold">Service List</h3>
                <p className="text-center mb-5">Atlantic Cliff uses an artificial intelligence based system that tracks real-time data ensuring fast delivery. Whether your delivery is for your customer or someone you care for, we will deliver it with care.</p>
                <Row xs={1} md={3} className="g-4">
                    {
                        slicedProduct.map(product => <Product
                            product={product}
                            key={product._id}
                        ></Product>)
                    }
                </Row>
            </Container>
            <Review></Review>
            <Featured></Featured>
            <Footer></Footer>
        </div>
    );
};

export default Home;