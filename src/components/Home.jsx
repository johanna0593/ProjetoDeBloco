// src/components/Home.jsx
import React from "react";
import UserProfile from "./UserProfile"; // Importe o componente de perfil
import Feed from "./Feed"; // Importe o componente Feed

const Home = () => {
  return (
    <div className="home-container">
      {/* Seção de Resumo do Perfil */}
      <div className="profile-summary">
        <h2>Resumo do Perfil</h2>
        <UserProfile /> {/* Componente que exibe as informações do usuário */}
      </div>

      {/* Seção de Feed */}
      <div className="feed-section">
        <h2>Feed de Posts</h2>
        <Feed /> {/* Componente que exibe o feed de posts */}
      </div>
    </div>
  );
};

export default Home;
