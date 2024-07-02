import React, { useState } from 'react'
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <div className="wrapper">
            <form onSubmit={console.log("submitted")}>
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/> 
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/> 
                    <FaLock className="icon"/>
                </div>
    
                <button type="submit">Sign Up</button>
    
                <div className="register-link">
                    <p>Already have an account <Link to="/">Log In</Link></p>
                </div>
            </form>
        </div>
      )
}

export default SignUp