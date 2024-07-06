import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const NewEureka = ({ addEureka }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const newEureka = { title, date, body };
    addEureka(newEureka);
    navigate("/");
  };

  return (
    <div className="new-eureka">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Body</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Add Eureka</button>
      </form>
    </div>
  );
};

export default NewEureka;
