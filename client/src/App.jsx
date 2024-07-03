//TOPMOST LEVEL
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NewEureka from './pages/NewEureka.jsx';
import LogIn from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';



const App = () => {
  return (
    <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<NewEureka />} />
    </Routes>
  )
}

export default App