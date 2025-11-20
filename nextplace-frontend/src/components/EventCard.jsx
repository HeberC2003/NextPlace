import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({
  id,
  image,
  title,
  date,
  tag,
  onEdit,
  onDelete,
  onView
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Dashboard = /organizer...
  // Home y cualquier otra ruta = public
  const mode = pathname.startsWith("/organizer")
    ? "my-events"
    : "public";

  // Navegar al detalle del evento
  const goToDetail = () => {
    navigate(`/evento/${id}`);
  };

  return (
    <div className="card">
      <div className="tag">{tag}</div>

      <img src={image} alt={title} className="card-image" />

      <div className="card-content">
        <p className="title">{title}</p>
        <p className="date">{date}</p>

        {/* --- HOME (public) --- */}
        {mode === "public" && (
          <button className="reserve-button" onClick={goToDetail}>
            Reservar YA
          </button>
        )}

        {/* --- DASHBOARD (my-events) --- */}
        {mode === "my-events" && (
          <div className="admin-buttons">
            <button className="view-btn" onClick={() => onView(id)}>
              Ver
            </button>

            <button className="edit-btn" onClick={() => onEdit(id)}>
              Editar
            </button>

            <button className="delete-btn" onClick={() => onDelete(id)}>
              Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
