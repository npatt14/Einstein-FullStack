import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Eureka from "./Eureka.jsx";
import "../pages/Home.css";
import SearchBar from "./SearchBar";

const Feed = ({ eurekas, setEureka }) => {
  const [searchQuery, setSearchQuery] = useState(""); // store user input into search bar
  const navigate = useNavigate(); // react hook used to navigate between routes in app

  const handleAddEureka = () => {
    navigate("/new-eureka");
  };
  // check if any existing eureka title includes user input into search bar
  const filteredEurekas = eurekas.filter((eureka) =>
    eureka.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="feed">
      <div className="feed-header">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button className="plus-button" onClick={handleAddEureka}>
          +
        </button>
      </div>
      {filteredEurekas.map((eureka, index) => (
        <Eureka
          key={index}
          title={eureka.title}
          date={eureka.date}
          body={eureka.body}
        />
      ))}
    </div>
  );
};

export default Feed;
