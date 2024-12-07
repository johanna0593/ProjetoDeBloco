// src/views/explorar/favoritos.jsx
import React from "react";
import Card from "../explorar/Card"; // Certifique-se de que o caminho está correto

const Favoritos = ({ filmesFavoritos }) => {
  // Verificação para garantir que 'filmesFavoritos' não é undefined ou null
  if (!filmesFavoritos || filmesFavoritos.length === 0) {
    return <p>Sem favoritos para mostrar.</p>; // Exibe mensagem se não houver favoritos
  }

  return (
    <div className="favoritos-container">
      <h3>Favoritos</h3>
      <div className="cards-container">
        {filmesFavoritos.map((filme) => (
          <Card
            key={filme.id}
            titulo={filme.titulo}
            categoria={filme.categoria}
            ano={filme.ano}
          />
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
