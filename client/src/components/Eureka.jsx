import React from 'react';
import '../pages/Home.css';

const Eureka = ({ title, date, body }) => {
  return (
    <div className="eureka-container">
      <div className="eureka-shadow">
        <div className="eureka">
          <div className="content-container">
            <div className="date-title">
              <h2 className="date">{date}</h2>
              <h1 className="title">{title}</h1>
            </div>
            <div className="eureka-body">
              <p>{body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eureka;