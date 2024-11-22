import React from "react";
import "./index.css";

const Feed = () => {
  const activities = [
    {
      id: 1,
      user: "Usuário 1",
      action: 'comentou no filme "Inception"',
      time: "5 minutos atrás",
    },
    {
      id: 2,
      user: "Usuário 2",
      action: 'curtiu o filme "The Matrix"',
      time: "20 minutos atrás",
    },
    {
      id: 3,
      user: "Usuário 3",
      action: 'adicionou "Interstellar" à sua lista de desejos',
      time: "1 hora atrás",
    },
    {
      id: 4,
      user: "Usuário 4",
      action: 'assistiu ao filme "Avatar"',
      time: "2 horas atrás",
    },
  ];

  return (
    <div className="feed">
      <h2>Feed de Atividades</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.user}</strong> {activity.action}{" "}
            <span className="activity-time">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
