import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import ejemplo from "../assets/ejemplo.jpg";

function TicketsPage() {
  const navigate = useNavigate();
  const [general, setGeneral] = useState(0);
  const [vip, setVip] = useState(0);

  const handleContinue = () => {
    navigate("/detalles");
  };

  return (
    <div className="container">
      {}
      <header className="event-header">
        <img
          src={ejemplo}
          alt="ejemplo"  
          className="event-image"
        />
        <div className="event-info">
          <h2>Nombre del evento </h2>
          <p>
            Informacion del evento
          </p>
          <div className="event-details">
            <p>📅 FECHA</p>
            <p>🕘 HORA</p>
            <p>📍 LUGAR </p>
          </div>
        </div>
      </header>

      {}
      <section className="tickets-section">
        <div className="tickets-left">
          <div className="steps">
            <span className="active-step">Tickets</span>
            <span>Detalles</span>
            <span>Pago</span>
          </div>

          <h3>Seleccione sus tickets</h3>

          {}
          <div className="ticket-card">
            <div>
              <h4>Admisión General</h4>
              <p>Entrada estándar</p>
              <span className="available">150 disponibles</span>
            </div>
            <div className="ticket-actions">
              <span className="price">$45</span>
              <div className="quantity-control">
                <button onClick={() => setGeneral(Math.max(0, general - 1))}>-</button>
                <span>{general}</span>
                <button onClick={() => setGeneral(general + 1)}>+</button>
              </div>
            </div>
          </div>

          {}
          <div className="ticket-card">
            <div>
              <h4>Experiencia VIP</h4>
              <p>Acceso premium con beneficios exclusivos</p>
              <span className="available">50 disponibles</span>
            </div>
            <div className="ticket-actions">
              <span className="price">$120</span>
              <div className="quantity-control">
                <button onClick={() => setVip(Math.max(0, vip - 1))}>-</button>
                <span>{vip}</span>
                <button onClick={() => setVip(vip + 1)}>+</button>
              </div>
            </div>
          </div>
        </div>

        {}
        <aside className="order-summary">
          <h3>Resumen del pedido</h3>
          <div className="total-section">
            <span>Total</span>
            <span>${45 * general + 120 * vip}</span>
          </div>
          <button className="continue-btn" onClick={handleContinue}>
            Continuar
          </button>
          <p className="secure-info">Seccion de pago</p>
        </aside>
      </section>
    </div>
  );
}

export default TicketsPage;
