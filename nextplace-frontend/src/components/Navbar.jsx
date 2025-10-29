import React from "react";
import "./Navbar.css"; // Importamos solo el CSS del navbar

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <a href="#" className="navbar-logo">
          NextPlace
        </a>

        {/* Links (corregido: ya no está oculto) */}
        <div className="navbar-links flex">
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>

        {/* Acciones */}
        <div className="navbar-actions">
          <a href="#" className="user-icon"></a>
          <button className="sign-in-button">Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
