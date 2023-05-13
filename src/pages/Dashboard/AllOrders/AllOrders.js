import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://aurna-watch-server-side-production.up.railway.app/users")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      const url = `https://aurna-watch-server-side-production.up.railway.app/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingUser = orders.filter((user) => user._id !== id);
            setOrders(remainingUser);
          }
        });
    }
  };
  return (
    <Container>
      <h5>Manage all orders</h5>
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Product</th>
            <th>Delete</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((data) => (
            <tr key={data._id}>
              <td>{data.email}</td>
              <td>{data.serviceName}</td>
              <td>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn btn-outline-danger"
                >
                  X
                </button>
              </td>
              <td>Pending</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllOrders;
