import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Row } from 'react-bootstrap';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import GiveReview from '../GiveReview/GiveReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllOrders from '../AllOrders/AllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRout';
import UserRoute from '../../Login/UserRoute/UserRoute';
const Dashboard = () => {
    const { logout, admin, user } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div className="container mt-5">
            <Row>
                <div>
                    <h5>{user.displayName}</h5>
                    <h5 className="mb-3">{user.email}</h5>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled p-0">
                        {!admin ? <ul className="list-unstyled p-0">
                            <li>
                                <Link className="btn btn-outline-info w-100 text-decoration-none" to={`${url}/myOrders`}>My Orders</Link>
                            </li>
                            <li>
                                <Link className="btn btn-outline-info mt-3 w-100 text-decoration-none" to={`${url}/pay`}>Pay</Link>
                            </li>
                            <li>
                                <Link className="btn btn-outline-info mt-3 w-100 text-decoration-none" to={`${url}/review`}>Review</Link>
                            </li>
                        </ul> :
                            <ul className="list-unstyled p-0">
                                <li>
                                    <Link className="btn btn-outline-info mt-3 w-100 text-decoration-none" to={`${url}/allOrders`}>Manage all orders</Link>
                                </li>
                                <li>
                                    <Link className="btn btn-outline-info mt-3 w-100 text-decoration-none" to={`${url}/addProduct`}>Add a product</Link>
                                </li>
                                <li>
                                    <Link className="btn btn-outline-info mt-3 w-100 text-decoration-none" to={`${url}/manageProduct`}>Manage Product</Link>
                                </li>
                                <li>
                                    <Link className="btn btn-outline-info mt-3 w-100 text-decoration-none" to={`${url}/makeAdmin`}>Make Admin</Link>
                                </li>
                            </ul>
                        }
                        <li>
                            <button className="btn btn-outline-dark mt-4 w-100" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
                <div className="col-md-8">
                    <Switch>
                        <UserRoute exact path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </UserRoute>
                        <UserRoute path={`${path}/pay`}>
                            <Pay></Pay>
                        </UserRoute>
                        <UserRoute path={`${path}/review`}>
                            <GiveReview></GiveReview>
                        </UserRoute>
                        <AdminRoute path={`${path}/allOrders`}>
                            <AllOrders></AllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProduct`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                </div>
            </Row>
        </div>
    );
};

export default Dashboard;