import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTrophy,
  faFilm,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  const user = {
    photo: "https://via.placeholder.com/150",
    name: "Nome do Usuário",
    level: 7,
    progress: 60,
    achievements: [
      { name: "Crítico de Cinema", icon: faStar },
      { name: "Maratonista de Filmes", icon: faTrophy },
      { name: "Explorador de Gêneros", icon: faFilm },
      { name: "Colecionador de Filmes", icon: faAward },
    ],
  };

  return (
    <div className="user-profile">
      <img src={user.photo} alt="Foto do Usuário" className="user-photo" />
      <h2 className="user-name">{user.name}</h2>
      <div className="user-level">
        <p>Nível: {user.level}</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${user.progress}%` }}
          ></div>
        </div>
        <p>{user.progress}% para o próximo nível</p>
      </div>
      <div className="user-achievements">
        <h3>Conquistas</h3>
        <ul>
          {user.achievements.map((achievement, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={achievement.icon} /> {achievement.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
