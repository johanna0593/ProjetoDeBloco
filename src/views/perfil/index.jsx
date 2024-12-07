// src/views/perfil/index.jsx
import React from "react";
import Header from "../../components/header"; 
import UserProfile from "../../components/userProfile"; 
import Favoritos from "../explorar/favoritos"; 
import "./index.css";

// Exemplo de filmes favoritos
const filmesFavoritos = [
  { id: 1, titulo: "Inception", categoria: "Sci-Fi", ano: 2010 },
  { id: 2, titulo: "The Dark Knight", categoria: "Action", ano: 2008 },
  { id: 3, titulo: "Avengers", categoria: "Action", ano: 2012 },
];

export default function Perfil() {
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
          {/* Adicionando uma margem superior para separar o título do conteúdo */}
          <div className="titulo-perfil">Perfil</div>
          {/* Passando filmesFavoritos para o componente Favoritos */}
          <Favoritos filmesFavoritos={filmesFavoritos} />
        </div>
      </div>
    </div>
  );
}
