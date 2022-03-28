import React from 'react';
import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo-aurna.png'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar className="header-bg" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold logo-name">
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
                            <Link className="nav-link route-name" to="/">Home</Link>
                            <Link className="route-name nav-link" to="/products">Explore</Link>
                            {user?.email ?
                                <Nav.Link className="route-name" as={Link} to="/dashboard">Dashboard</Nav.Link>
                                :
                                <Nav.Link as={Link} className="route-name" to="/login">Login</Nav.Link>
                            }
                            {user?.email ?
                                <Dropdown className="nav-link">
                                    <Dropdown.Toggle className="user-name border-0" id="dropdown-basic">
                                        {user?.displayName}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={logout}>logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
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