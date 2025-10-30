import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus componentes de página
import TicketsPages from "../pages/user/GetTickets/TicketsPages.jsx";
import DetallePage from "../pages/user/GetTickets/DetallePage.jsx";
import PagoPage from "../pages/user/GetTickets/PagoPage.jsx";
import CreateEvent from "../pages/organizer/CreateEvent/CreateEvent.jsx";
// Probablemente necesites una página de inicio para ver los eventos
// import HomePage from "../pages/user/Home/Home.jsx";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal de la app, donde se listan los eventos */}
        {/* <Route path="/" element={<HomePage />} /> */}

        {/* --- Flujo de Compra de Tickets --- */}
        {/* 1. Página principal para seleccionar tickets de UN evento específico */}
        <Route path="/tickets/:eventId" element={<TicketsPages />} />

        {/* 2. Página para que el usuario ingrese sus detalles */}
        <Route path="/detalles/:eventId" element={<DetallePage />} />

        {/* 3. Página final para el pago */}
        <Route path="/pago/:eventId" element={<PagoPage />} />
        
        {/* --- Otras Rutas --- */}
        <Route path="/create-event" element={<CreateEvent />} />

        {/* Ruta de ejemplo por si quieres probar la vista de tickets directamente */}
        <Route path="/" element={<TicketsPages />} />
      </Routes>
    </Router>
  );
}