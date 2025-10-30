import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Captura from "../assets/Captura.JPG";

function DetallesPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/pago");
  };

  return (
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
  );
}

export default DetallesPage;