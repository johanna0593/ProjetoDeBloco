import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importe o Router e Routes
import Header from "./components/Header"; // Importe o Header
import UserProfile from "./components/UserProfile"; // Importe o componente de perfil
import Feed from "./components/Feed"; // Importe o Feed
import Home from "./components/Home";
import "./App.css"; // Importe o estilo

function App() {
  return (
    <Router>
      {" "}
      {/* Envolva o conteúdo com o Router */}
      <div className="app-container">
        <div className="nav">
          <Header /> {/* O Header é renderizado fora das rotas */}
        </div>
        <div className="main-content">
          <div className="container">
            {/* O conteúdo do perfil */}
            <UserProfile />
          </div>
          <div className="feed-container">
            {/* O conteúdo do feed */}
            <Feed />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
