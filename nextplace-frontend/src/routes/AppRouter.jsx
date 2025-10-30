// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home/Home";
import Login from "../pages/user/Login/Login";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ruta del login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
