import React from 'react';

const Eureka = ({ title, date, body }) => {
  return (
    <div className="eureka-container">
    <div className="eureka-shadow">
      <div className="eureka">
        <div className="content-container">
          <div className="picture-title-date">
              <h1>{title}</h1>
              <h2>{date}</h2>
              {/* STAR ICON HERE */}
          </div>
          <div className="body">
            <p>{body}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Eureka;