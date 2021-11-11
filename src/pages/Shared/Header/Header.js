import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-aurna.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold">
                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-middle"
                        />{' '}
                        Aurna Watch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/products">Explore</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;