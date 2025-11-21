import React from "react";
import { useNavigate } from "react-router-dom"; //  Importa el hook para navegar
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); // Inicializa el hook

  const handleSignIn = () => {
    navigate("/login"); //  Redirige a la ruta de login
  };

  return (
    <nav id="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <a href="#" className="navbar-logo">
          NextPlace
        </a>

        {/* Links */}
        <div className="navbar-links flex">
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>

        {/* Acciones */}
        <div className="navbar-actions">
          <a href="#" className="user-icon"></a>
          <button className="sign-in-button" onClick={handleSignIn}>
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
