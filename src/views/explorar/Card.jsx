// src/views/explorar/Card.jsx
import React from "react";

const Card = ({ titulo, categoria, ano }) => {
  return (
    <div className="card">
      <h4 className="card-titulo">{titulo}</h4>
      <p className="card-categoria">{categoria}</p>
      <p className="card-ano">{ano}</p>
    </div>
  );
};

export default Card;
