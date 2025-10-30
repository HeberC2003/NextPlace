// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home/Home";
import LoginForm from "../pages/user/Login/login";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}