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
                <h3 className="text-center my-3 fw-bold">Products List</h3>
                <p className="text-center mb-5">We’re all so digital, but the ’50s was the era of watches you had to wind. When Sir Edmund Hillary and Tenzing Norgay reached the summit of Everest in 1953, Hillary was equipped with a Rolex Oyster Perpetual.– Sara Sheridan</p>
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