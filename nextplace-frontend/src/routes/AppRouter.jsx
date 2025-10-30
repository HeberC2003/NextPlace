import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importaciones combinadas de ambas ramas
import Home from "../pages/user/Home/Home";
import Login from "../pages/user/Login/Login";
import TicketsPages from "../pages/user/GetTickets/TicketsPages.jsx";
import DetallePage from "../pages/user/GetTickets/DetallePage.jsx";
import PagoPage from "../pages/user/GetTickets/PagoPage.jsx";
import CreateEvent from "../pages/organizer/CreateEvent/CreateEvent.jsx";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* --- Rutas Principales y de Usuario --- */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* --- Flujo de Compra de Tickets --- */}
        <Route path="/tickets/:eventId" element={<TicketsPages />} />
        <Route path="/detalles/:eventId" element={<DetallePage />} />
        <Route path="/pago/:eventId" element={<PagoPage />} />
        
        {/* --- Rutas del Organizador --- */}
        <Route path="/create-event" element={<CreateEvent />} />

        {/* Añadir más rutas aquí a medida que las vayamos creando */}
      </Routes>
    </Router>
  );
}