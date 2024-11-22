// src/components/Home.jsx
import React from "react";
import UserProfile from "../../components/userProfile"; // Importe o componente de perfil
import Feed from "../../components/feed"; // Importe o componente Feed
import Header from "../../components/header";
import "./index.css";
import "../../global.css"

const Home = () => {
  return (
    <div className="app-container">
      <div className="nav">
        <Header />
      </div>
      <div className="main-content">
        <div className="container">            
          <UserProfile />
        </div>
        <div className="feed-container">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Home;
