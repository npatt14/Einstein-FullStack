import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TabBar from "../components/TabBar.jsx";
import Blank from "../components/Blank.jsx";
import Feed from "../components/Feed.jsx";
import NewEureka from "../pages/NewEureka.jsx";
import SignUp from "./SignUp.jsx";
import Login from "./LogIn.jsx";
import "./Home.css";

const Home = () => {
  // Dummy data for now \/
  const [eurekas, setEurekas] = useState([ 
    {
      title: "Naval Ravikant Quote",
      date: "7/6/2024",
      body: "“Your life is a firefly blink in a night. You’re here for such a brief period of time. If you fully acknowledge the futility of what you’re doing, then I think it can bring great happiness and peace because you realize this is a game.”",
    },
    {
      title: "Sextus Quote",
      date: "7/6/2024",
      body: "“Absence makes the heart grow fonder”",
    },
    {
      title: "Mirror Neurons",
      date: "7/6/2024",
      body: "“A subset of neurons that play a crucial role in our ability to understand and imitate the actions of others. They’re activated when an individual performs a specific action AND when they observe someone else performing the same action. Originally discovered in the 1990s”",
    },
    {
      title: "Toxic Compassion",
      date: "7/6/2024",
      body: "“The prioritization of short term emotional comfort over long-term outcomes - disregarding truth.”",
    },
    {
      title: "3 Forms of Leverage - Labor, Capital, and Product.",
      date: "7/6/2024",
      body: `"Traditionally, labor leverage comes from having people work for you. This is the oldest form of leverage and is often the first one people think of. You hire employees, build a team, and your efforts are multiplied through the collective work of others. However, labor leverage usually requires permission in the form of hiring, and it involves managing people, which can be complex and time-consuming. 
      Capital leverage involves using money to multiply your efforts. This could be in the form of investment, where your money works for you, or in business, where capital can be used to scale operations. Like labor leverage, capital leverage often requires permission. You need to convince investors to give you money or financial institutions to loan you funds.
      Product leverage, particularly in the form of code or media, allows you to extend your influence without needing to manage people or ask for capital. If you write a piece of software, create a podcast, or publish a book, these products can be distributed to millions without requiring incremental effort. This is permissionless because, thanks to the internet, you don't need anyone's approval to distribute your product globally.”`,
    },
    { title: "Intra", date: "7/6/2024", body: "“On the inside/within.”" },
    {
      title: "Methylation",
      date: "7/6/2024",
      body: "“There is not a single nutrient known to mankind that when entered into the body, is used in the format that we put it in. Everything we put into our bodies has to be refined into the usable form. If you can’t make this conversion - you have a deficiency. It’s this deficiency that leads to the most common ailments that we suffer from. This process is called methylation.”",
    },
  ]);

  const addEureka = (eureka) => {
    setEurekas([eureka, ...eurekas]);
  };

  return (
    <div className="app">
      <TabBar />
      <Routes>
        <Route
          path="/"
          element={<Feed eurekas={eurekas} setEurekas={setEurekas} />}
        />
        <Route
          path="/new-eureka"
          element={<NewEureka addEureka={addEureka} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Blank />
    </div>
  );
};

export default Home;
