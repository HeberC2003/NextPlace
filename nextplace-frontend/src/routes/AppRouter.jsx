import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importaciones de todas tus páginas
import Home from "../pages/user/Home/Home.tsx";
import Login from "../pages/user/Login/login.jsx";
import TicketsPages from "../pages/user/GetTickets/TicketsPages.jsx";
import DetallePage from "../pages/user/GetTickets/DetallePage.jsx";
import PagoPage from "../pages/user/GetTickets/PagoPage.jsx";
import CreateEvent from "../pages/organizer/CreateEvent/CreateEvent.jsx";

export default function AppRouter() {
  return (
    <Router>
      {/* Ya no hay un Navbar global aquí */}
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
      </Routes>
    </Router>
  );
}