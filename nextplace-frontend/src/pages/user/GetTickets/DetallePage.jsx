// Importa useParams para leer el ID
import React from "react";
import { useNavigate, useParams } from "react-router-dom"; // <-- Añade useParams
import "./GetTickets.css"; // <-- Corrige esta ruta
// Corrige la ruta de la imagen
import Captura from "../../../assets/images/Captura.JPG"; 

function DetallesPage() {
  const navigate = useNavigate();
  const { eventId } = useParams(); // <-- Obtiene el ID de la URL

  const handleContinue = () => {
    // Pasa el eventId a la ruta de pago
    navigate(`/pago/${eventId}`);
  };

  return (
    <div className="get-tickets">
    <div className="form-container">
      <h2>Detalles del Comprador</h2>
      <p className="form-subtitle">
        Ingresa tus datos para completar la compra de tus tickets
      </p>

      <form className="detalles-form">
        <div>
          <label>Nombre completo</label>
          <input type="text" placeholder="" />
        </div>
        <div>
          <label>Correo electrónico</label>
          <input type="email" placeholder="" />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="tel" placeholder="" />
        </div>

        <button type="button" className="continuar-btn" onClick={handleContinue}>
          Continuar al pago →
        </button>
      </form>

       <img src={Captura} alt="logo" className="logo-footer" />

    </div>
    </div>
  );
}

export default DetallesPage;