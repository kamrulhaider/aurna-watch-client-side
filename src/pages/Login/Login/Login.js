import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();

    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="w-50">
                <h4 className="text-center">Login</h4>
                {!isLoading && <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onBlur={handleonBlur}
                            placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onBlur={handleonBlur}
                            placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>}
                {isLoading && <Spinner animation="grow" variant="success" />}
                {user?.email && <Alert className="text-success mt-3">User Login successfully!</Alert>}
                {authError && <Alert className="text-danger mt-3">{authError}</Alert>}
                <Link to="/register">
                    New to the site? Please register
                </Link>
            </div>
        </div>
    );
};

export default Login;