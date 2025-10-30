// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CreateEvent from "../pages/organizer/CreateEvent/CreateEvent.jsx";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* raíz redirige al formulario por ahora */}
        <Route path="/" element={<Navigate to="/organizer/events/new" replace />} />
        <Route path="/organizer/events/new" element={<CreateEvent />} />
        {/* aquí podrás sumar más rutas:
            <Route path="/organizer/events" element={<EventsList />} />
            <Route path="/organizer" element={<Dashboard />} />
        */}
      </Routes>
    </Router>
  );
}
