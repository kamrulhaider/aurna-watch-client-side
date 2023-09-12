import React, { useState } from "react";

const GiveReview = () => {
  const [name, setName] = useState("anonymus");
  const [comment, setComment] = useState("no comment");
  const [rating, setRating] = useState(5);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { name, comment, rating };
    fetch("https://aurna-watch-server-side.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("sucessfully posted");
        }
      });
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleAdminSubmit}>
        <input
          required
          onBlur={handleName}
          className="form-control my-2"
          type="text"
          placeholder="Your Name"
        />
        <input
          onBlur={handleComment}
          className="form-control my-2"
          placeholder="your review"
          type="text"
        />
        <input
          onBlur={handleRating}
          className="form-control my-2"
          placeholder="0-5"
          type="number"
        />
        <button type="submit" className="btn btn-outline-success mb-4">
          Post
        </button>
      </form>
    </div>
  );
};

export default GiveReview;
