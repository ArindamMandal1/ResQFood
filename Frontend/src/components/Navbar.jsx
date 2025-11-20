// src/components/Navbar.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  const navigate = useNavigate();

  // read login state from localStorage
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("resq_user")) || null;
    } catch (e) {
      return null;
    }
  });

  // keep state in sync if other tabs change localStorage
  useEffect(() => {
    function onStorage(e) {
      if (e.key === "resq_user") {
        try { setUser(JSON.parse(e.newValue)); } catch { setUser(null); }
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function handleLogout() {
    localStorage.removeItem("resq_user");
    setUser(null);
    navigate("/"); 
  }

  return (
  <nav
    className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-white/30"
    style={{ backdropFilter: "blur(10px)" }}
  >
    <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
      
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/ResQFoodlogo.png"
          alt="ResQFoodlogo"
          className="h-12 w-auto object-contain drop-shadow"
        />
      </Link>

      {/* BUTTON GROUP — THE FIX IS HERE → ml-auto */}
      <div className="flex items-center gap-3 ml-auto">
        
        <Link
          to="/"
          className="px-4 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition"
        >
          Home
        </Link>

        {user ? (
  <>
    <Link
      to="/dashboard"
      className="px-5 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition"
    >
      Dashboard
    </Link>

    <button
      onClick={handleLogout}
      className="px-5 py-2 rounded-lg font-medium bg-red-500 text-white hover:bg-red-600 transition"
    >
      Logout
    </button>
  </>
) : (
<Link
            to="/signup"
            className="px-5 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition"
          >
            Sign Up
          </Link>
        )}

      </div>
    </div>
  </nav>
);
}