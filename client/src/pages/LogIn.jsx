import React, { useState } from 'react';
import axios from 'axios';
import {FaUser, FaLock} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // link replaces <a> anchor, allowing us to navigate between different routes in our SPA without triggering a full page reload

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    
  return (
    <div className="container">
    <div className="wrapper">
        <form onSubmit={console.log("submitted")}>
            <h1>Log In</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/> 
                <FaUser className="icon"/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/> 
                <FaLock className="icon"/>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
                <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default LogIn