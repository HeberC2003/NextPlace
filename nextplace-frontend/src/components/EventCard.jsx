import React from "react";
import "./EventCard.css";

const EventCard = ({ image, title, date, tag }) => {
  return (
    <div className="card">
      <div className="tag">{tag}</div>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <p className="title">{title}</p>
        <p className="date">{date}</p>
        <button className="reserve-button">Reservar YA</button>
      </div>
    </div>
  );
};

export default EventCard;

