import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketsPages from "./pages/TicketsPages";
import DetallePage from "./pages/DetallePage";
import PagoPage from "./pages/PagoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicketsPages />} />
        <Route path="/detalles" element={<DetallePage />} />
        <Route path="/pago" element={<PagoPage />} />
      </Routes>
    </Router>
  );
}

export default App;


