// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import App from "./App";
import "./index.css"; // Tailwind + CSS global

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
=======
import AppRouter from "./routes/AppRouter.jsx";
import "./index.css";   // Tailwind aquí

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
>>>>>>> feature/Heber-eventlist
  </React.StrictMode>
);
