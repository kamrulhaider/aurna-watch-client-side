import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState();
  const [img, setImg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleComment = (e) => {
    setDetails(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleUrl = (e) => {
    setImg(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { name, details, price, img };
    fetch(
      "https://aurna-watch-server-side-production.up.railway.app/services",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSuccess(true);
        }
      });
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div className="container">
      <h5>Post a new product</h5>
      <form onSubmit={handleAdminSubmit}>
        <input
          required
          onBlur={handleName}
          className="form-control my-2"
          type="text"
          placeholder="Product Name"
        />
        <textarea
          onBlur={handleComment}
          className="form-control my-2"
          placeholder="Description"
          type="text"
        />
        <input
          onBlur={handlePrice}
          className="form-control my-2"
          placeholder="price"
          type="number"
        />
        <input
          onBlur={handleUrl}
          className="form-control my-2"
          placeholder="image url"
          type="text"
        />
        <button type="submit" className="btn btn-outline-success mb-4">
          Post
        </button>
      </form>
      {success && <Alert>Successfully Added</Alert>}
    </div>
  );
};

export default AddProduct;
