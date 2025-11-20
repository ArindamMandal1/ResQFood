// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";

function isLoggedIn() {
  try { return !!JSON.parse(localStorage.getItem("resq_user")); } catch { return false; }
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20 min-h-[calc(100vh-160px)]">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={isLoggedIn() ? <Dashboard /> : <Navigate to="/signup" replace />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}
