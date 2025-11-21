import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ id, image, title, date, tag, onDelete }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const mode = pathname.startsWith("/organizer") ? "my-events" : "public";

  const handleView = () => {
    navigate(`/evento/${id}`);
  };

  const handleEdit = () => {
    navigate(`/organizer/editar-evento/${id}`);
  };

  const handleDelete = () => {
    const confirmed = window.confirm("¿Eliminar evento? Esta acción no se puede deshacer.");
    if (confirmed) {
      onDelete(id);
    }
  };

  return (
    <div className="card">
      <div className="tag">{tag}</div>

      <img src={image} alt={title} className="card-image" />

      <div className="card-content">
        <p className="title">{title}</p>
        <p className="date">{date}</p>

        {mode === "public" && (
          <button className="reserve-button" onClick={handleView}>
            Reservar YA
          </button>
        )}

        {mode === "my-events" && (
          <div className="admin-buttons">
            <button className="view-btn event-card-btn" onClick={handleView}>
              Ver
            </button>

            <button className="edit-btn event-card-btn" onClick={handleEdit}>
              Editar
            </button>

            <button className="delete-btn event-card-btn" onClick={handleDelete}>
              Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
