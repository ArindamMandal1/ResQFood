import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#081225d1] text-white pt-14 pb-6">
      
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

        {/* BRAND + TEXT */}
        <div>
          <img src={logo} alt="Logo" className="w-40 h-auto mb-4" />
          <p className="text-sm text-white/80 leading-relaxed">
            Connecting communities through sustainable food sharing.  
            ResQFood helps restaurants, NGOs and volunteers redistribute surplus 
            meals—reducing waste and strengthening food security.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#ccff33]" onClick={() => window.scrollTo(0,0)}>
                Home
              </Link>
            </li>
            <li>
              <a href="#features" className="hover:text-[#ccff33]">Mission</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-[#ccff33]">Testimonials</a>
            </li>
            <li>
              <Link to="/signup" className="hover:text-[#ccff33]">Sign Up</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact & Support</h4>

          <div className="text-sm space-y-2">
            <p>ResQFood@hotmail.com</p>
            <p>+91 98765 43210</p>
            <p>123 Community St, Kolkata</p>

            <p className="mt-4 leading-relaxed">
              <span className="text-[#ccff33] font-semibold">Need help?</span>  
              &nbsp;Email support or join our volunteer network to help collect and distribute meals.
            </p>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20 mt-12"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-sm text-white/70 mt-6">
        © 2025 <span className="text-white">ResQFood</span>. All Rights Reserved.
      </p>

    </footer>
  );
}
