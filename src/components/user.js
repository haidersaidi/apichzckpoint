import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => navigate("/users");

  useEffect(() => {
    const getUserDetail = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getUserDetail();
  }, []);
  return (
    <div className="container py-5">
      {loading ? (
        <div className=" d-flex justify-content-center">
          <div
            className="spinner-border text-primary text-center"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <div>
          <h1>{user.name}</h1>
          <p>
            <span className="text-secondary">user name</span>: {user.username}
          </p>
          <p>
            <span className="text-secondary">email:</span> {user.email}
          </p>
          <p>
            <span className="text-secondary">address:</span>{" "}
            {user.address.street} {user.address.suite} {user.address.city}{" "}
            {user.address.zipcode}
          </p>
          <p>
            <span className="text-secondary">phone:</span> {user.phone}
          </p>
          <p>
            <span className="text-secondary">website:</span> {user.website}
          </p>
          <p>
            <span className="text-secondary">company name:</span>{" "}
            {user.company.name}
          </p>
          <p>
            <span className="text-secondary">company catch phrase:</span>{" "}
            {user.company.catchPhrase}
          </p>
          <p>
            <span className="text-secondary">company bs:</span>{" "}
            {user.company.bs}
          </p>
          <button className="btn btn-primary" onClick={handleClick}>
            Go back
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
