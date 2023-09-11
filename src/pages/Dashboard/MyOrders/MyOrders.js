import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://aurna-watch-api-server.onrender.com/users")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const result = orders.filter((data) => data.email === user.email);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      const url = `https://aurna-watch-api-server.onrender.com/users/${id}`;
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
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>Products Name</th>
            <th>Price</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {result.map((data) => (
            <tr key={data._id}>
              <td>{data.serviceName}</td>
              <td>{data.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn btn-outline-danger"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyOrders;
