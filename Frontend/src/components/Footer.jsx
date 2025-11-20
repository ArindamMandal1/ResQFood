// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="ResQFoodlogo.png" alt="" 
            className="h-12 w-auto object-contain drop-shadow"
            />
            <div>
              <div className="font-bold text-lg">ResQFood</div>
              <div className="text-sm text-gray-600">Connecting communities through sustainable food sharing</div>
            </div>
          </div>
          <p className="text-sm text-gray-600">ResQFood helps restaurants, NGOs and volunteers redistribute surplus food to those in need — reducing waste and increasing food security in local communities.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/">Home</Link></li>
            <li><a href="#features">Mission</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact & Support</h4>
          <div className="text-sm text-gray-700 space-y-2">
            <div>ResQFood@hotmail.com</div>
            <div>+91 98765 43210</div>
            <div>123 Community St,Kolkata</div>
            <div className="mt-4 text-sm">Need help? Email support or join our volunteer network to help collect and distribute meals.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
