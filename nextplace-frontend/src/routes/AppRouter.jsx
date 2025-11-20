// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas públicas
import Home from "../pages/user/Home/Home";
import EventDetail from "../pages/user/EventDetail/EventDetail";

// Dashboard layout
import DashboardLayout from "../pages/organizer/Dashboard/DashboardLayout";

// Páginas del organizador
import EventList from "../pages/organizer/EventsList/EventList";
// ❌ ESTA IMPORTACIÓN TE FALTABA Y DA ERROR, POR ESO LA COMENTAMOS
// import CrearEvento from "../pages/organizer/CreateEvent/CreateEvent";

export default function AppRouter() {
  return (
    <Router>
      <Routes>

        {/* HOME PÚBLICA */}
        <Route path="/" element={<Home />} />

        {/* DASHBOARD — ruta principal */}
        <Route
          path="/organizer"
          element={
            <DashboardLayout>
              <EventList />   {/* << ESTE SE MUESTRA DE PRIMERO */}
            </DashboardLayout>
          }
        />

        {/* EVENT DETAIL */}
        <Route path="/evento/:id" element={<EventDetail />} />

        {/* OTRAS SUBRUTAS DEL DASHBOARD */}
        <Route
          path="/organizer/mis-eventos"
          element={
            <DashboardLayout>
              <EventList />
            </DashboardLayout>
          }
        />

        {/* ❌ RUTA QUE ESTABA DANDO ERROR — Comentada temporalmente */}
        {/*
        <Route
          path="/organizer/crear-evento"
          element={
            <DashboardLayout>
              <CrearEvento />
            </DashboardLayout>
          }
        />
        */}

      </Routes>
    </Router>
  );
}
