import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, X as XIcon } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between 
                    px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-5 
                    text-white bg-[#112040a9] backdrop-blur-md">

      {/* Logo */}
      <Link to="/" className="flex-1 md:flex-none">
        <img
          src={logo}
          alt="Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 font-medium">
        <Link to="/" className="hover:text-[#ccff33] transition">Home</Link>
        <a href="#features" className="hover:text-[#ccff33] transition">About</a>
        <a href="#testimonials" className="hover:text-[#ccff33] transition">Testimonials</a>
        
        <Link to="/restaurantdashboard" className="hover:text-[#ccff33] transition">
          Restaurant Dashboard
        </Link>

        <Link to="/ngodashboard" className="hover:text-[#ccff33] transition">
          NGO Dashboard
        </Link>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-3">
        {!user ? (
          <>
            <button
              onClick={() => navigate("/login")}
              className="bg-green px-4 py-2 rounded-full font-medium hover:bg-green-dull transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="bg-green-600 px-5 py-2 rounded-full font-medium hover:bg-green-dull transition"
            >
              Register
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="bg-green px-5 py-2 rounded-full font-medium hover:bg-red-600 transition"
          >
            Log Out
          </button>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <MenuIcon
        className="md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-black/80 backdrop-blur-lg
                    text-lg font-medium flex flex-col items-center justify-center 
                    transition-all duration-300 z-50
                    ${isOpen ? "w-full opacity-100" : "w-0 opacity-0 overflow-hidden"}`}
      >
        <XIcon
          className="absolute top-6 right-6 w-8 h-8 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        <Link onClick={() => setIsOpen(false)} to="/" className="mb-5 hover:text-[#ccff33]">
          Home
        </Link>

        <a onClick={() => setIsOpen(false)} href="#features" className="mb-5 hover:text-[#ccff33]">
          About
        </a>

        <a onClick={() => setIsOpen(false)} href="#testimonials" className="mb-5 hover:text-[#ccff33]">
          Testimonials
        </a>

        <Link onClick={() => setIsOpen(false)} to="/restaurantdashboard" className="mb-5 hover:text-[#ccff33]">
          Restaurant Dashboard
        </Link>

        <Link onClick={() => setIsOpen(false)} to="/ngodashboard" className="mb-5 hover:text-[#ccff33]">
          NGO Dashboard
        </Link>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          {!user ? (
            <>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/login");
                }}
                className="bg-green px-8 py-2 rounded-full font-medium hover:bg-green-dull transition"
              >
                Login
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/signup");
                }}
                className="bg-green-600 px-8 py-2 rounded-full font-medium hover:bg-green-dull transition"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
                navigate("/");
              }}
              className="bg-green px-8 py-2 rounded-full font-medium hover:bg-red-600 transition"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
