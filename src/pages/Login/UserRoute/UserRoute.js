import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const UserRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && !admin ? children : <Redirect
                to={{
                    pathname: "/dashboard",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default UserRoute;