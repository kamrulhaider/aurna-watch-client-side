import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo-aurna.png'

const Header = () => {
    const { user, logout } = useAuth();
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
                        <Nav className="ms-auto align-middle">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/products">Explore</Link>
                            {user?.email ?
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                :
                                <Nav.Link as={Link} className="text-success" to="/login">Login</Nav.Link>
                            }
                            {user?.email ?
                                <button onClick={logout} className="btn btn-outline-success">Logout</button>
                                :
                                <></>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;