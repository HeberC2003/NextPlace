import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "../pages/user/Login/login";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}
