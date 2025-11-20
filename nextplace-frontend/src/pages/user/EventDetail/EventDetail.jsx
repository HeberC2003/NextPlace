import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../../../data/data";
import "./EventDetail.css";

export default function EventDetail() {
  const { id } = useParams();

  const event = events.find((ev) => ev.id === parseInt(id));

  if (!event) return <h2 style={{ padding: "40px" }}>Evento no encontrado</h2>;

  return (
    <div className="event-detail-container">

      {/* LEFT */}
      <div className="event-detail-left">
        <img src={event.image} alt={event.title} className="event-image" />

        <p className="small-text">Aquí estará un carrusel de fotos del evento</p>
      </div>

      {/* RIGHT */}
      <div className="event-detail-right">
        <h1 className="event-title-detail">{event.title}</h1>

        <p className="event-host">By PlanBNetwork</p>

        <p className="event-date">{event.date}</p>

        <p className="event-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit platea,
          etiam tellus sed quam sodales vehicula. Felis cubilia rhoncus eget
          aptent sapien posuere pharetra etiam, justo integer nulla suspendisse
          vel faucibus vulputate.
        </p>

        <button className="buy-btn">Comprar entrada</button>

        <p className="disclaimers">Disclaimers</p>
      </div>
    </div>
  );
}
