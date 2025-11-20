import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "../src/components/Footer";
import { io } from "socket.io-client";
const socket = io(import.meta.env.REACT_APP_API_URL, { withCredentials: true });

import Home from "./pages/Home";
import SignupForm from "./pages/Signup";
import Login from "./pages/Login";
import Map from "./pages/Map";
// import Profile from "./pages/Profile";
import RestaurantDashboard from "./pages/RestaurantDashboard";
import NGODashboard from "./pages/NGODashboard";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  useEffect(() => {
  socket.on("foodClaimed", () => window.location.reload());
  socket.on("foodCollected", () => window.location.reload());
}, []);
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          {/* <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} /> */}
          <Route path="/restaurantdashboard" element={<RestaurantDashboard />} />
          <Route path="/ngodashboard" element={<NGODashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
