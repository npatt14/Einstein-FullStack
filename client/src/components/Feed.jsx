import React from 'react';
import { useNavigate } from 'react-router-dom';
import Eureka from './Eureka.jsx';
import '../pages/Home.css';

const Feed = ({ eurekas, setEureka }) => {
  const navigate = useNavigate();

  const handleAddEureka = () => {
    navigate('/new-eureka');
  }

  return (
    <div className="feed">
      <button className="plus-button" onClick={handleAddEureka}>+</button>
      {eurekas.map((eureka, index) => (
        <Eureka key={index} title={eureka.title} date={eureka.date} body={eureka.body} />
      ))}
    </div>
  );
};

export default Feed;