import React from 'react';
import { Row, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-aurna.png';

const Footer = () => {
    return (
        <div className='bg-black py-4 mt-3 bg-gradient'>
            <Container>
                <Row>
                    <div className="col-md-6 text-center">
                        <Navbar.Brand as={Link} to="/" className="fw-bold mb-3 text-white">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-middle"
                            />{' '}
                            Aurna Watch</Navbar.Brand>
                        <p className='text-white mb-1'>348 Windler Bridge Apt. 463, South Heidi, Kentucky, 80751-4700</p>
                        <p className='text-white mb-1'>798.730.7477 x1890</p>
                        <p className='text-white'>trantow.linnie@example.com</p>
                    </div>
                    <div className="col-md-3 d-flex flex-column text-center justify-content-center">
                        <Link className="text-white" to='/'>Home</Link>
                        <Link className="text-white" to='/about'>About</Link>
                        <Link className="text-white" to='/contact'>Contact us</Link>
                    </div>
                    <div className="col-md-3 d-flex flex-column text-center justify-content-center">
                        <Link className='text-white' to='/products'>Products</Link>
                        <Link className='text-white' to='/login'>Login</Link>
                        <Link className='text-white' to='/register'>Register</Link>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;