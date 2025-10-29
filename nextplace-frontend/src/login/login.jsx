import React, { useState } from "react";
import "./login.css";
import loginImage from "./image/background.png"; // Asegúrate de que esta ruta sea correcta

function LoginForm() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {/* Imagen a la izquierda */}
        <div className="login-image">
          <img src={loginImage} alt="Login visual" />
        </div>

        {/* Formulario a la derecha */}
        <div className="login-form">
          <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>

          <div className="tab-switch">
            <button
              className={isLoginMode ? "active" : ""}
              onClick={() => setIsLoginMode(true)}
            >
              Login
            </button>
            <button
              className={!isLoginMode ? "active" : ""}
              onClick={() => setIsLoginMode(false)}
            >
              Signup
            </button>
            <div className={`tab-indicator ${isLoginMode ? "left" : "right"}`} />
          </div>

          <form>
            {!isLoginMode && <input type="text" placeholder="Name" required />}
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            {!isLoginMode && (
              <input type="password" placeholder="Confirm Password" required />
            )}

            {isLoginMode && (
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isLoginMode ? "Login" : "Signup"}
            </button>

            <p className="switch-mode">
              {isLoginMode
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoginMode(!isLoginMode);
                }}
              >
                {isLoginMode ? "Signup now" : "Login"}
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
