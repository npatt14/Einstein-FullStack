import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); //?
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        username,
        password,
      }); //?
      console.log("User signed up successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("There was an error signing up:", error);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>

        <div className="register-link">
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
