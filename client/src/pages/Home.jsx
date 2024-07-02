// 2ND TOPMOST
import React from 'react'
import TabBar from '../components/TabBar.jsx';
import Blank from '../components/Blank.jsx';
import Feed from '../components/Feed.jsx';
import '../index.css';

const Home = () => {
  return (
    <div className="app">
      <TabBar />
      <Feed />
      <Blank />
    </div>
  )
}

export default Home