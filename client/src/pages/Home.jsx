import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TabBar from '../components/TabBar.jsx';
import Blank from '../components/Blank.jsx';
import Feed from '../components/Feed.jsx';
import NewEureka from '../pages/NewEureka.jsx';
import SignUp from './SignUp.jsx'
import Login from './Login.jsx';
import './Home.css';

const Home = () => {
  const [eurekas, setEurekas] = useState([]);

  const addEureka = (eureka) => {
    setEurekas([eureka, ...eurekas]);
  };

  return (
    <div className="app">
      <TabBar />
      <Routes>
        <Route path="/" element={<Feed eurekas={eurekas} setEurekas={setEurekas} />} />
        <Route path="/new-eureka" element={<NewEureka addEureka={addEureka} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Blank />
    </div>
  );
};

export default Home;
