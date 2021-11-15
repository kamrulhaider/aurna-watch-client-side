import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center banner">
            <div className="w-75">
                <h1 className="text-center text-light">Everyone looks at your watch and it represents who you are, your values and your personal style.</h1>
                <p className="text-center text-light">– Kobe Bryant</p>
            </div>
        </Container>
    );
};

export default Banner;