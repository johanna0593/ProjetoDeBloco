// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom"; // Importe o Link
import "./index.css"

const Header = () => (
  <header>
    <h1 className="logo">CineFans</h1>
    <nav>
      <div className="nav-container">
        <Link to="/">Home</Link> {/* Link para a página Home */}
        <Link to="/perfil">Perfil</Link> {/* Link para a página Perfil */}
        <Link to="/explorar">Explorar</Link> {/* Link para a página Explorar */}
        <Link to="/configuracoes">Configurações</Link>{" "}
        {/* Link para a página Configurações */}
      </div>
    </nav>
  </header>
);

export default Header;
