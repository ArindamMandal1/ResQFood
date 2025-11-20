// import React, { useState } from "react";

// export default function AuthCard() {
//   const [role, setRole] = useState("Restaurant");

//   return (
//     <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
//       <div>
//         <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
//         <p className="text-gray-500 text-sm">
//           Choose your role and sign in to continue
//         </p>
//       </div>

//       {/* Role Switch */}
//       <div className="grid grid-cols-2 bg-gray-100 p-1 rounded-lg">
//         <button
//           onClick={() => setRole("Restaurant")}
//           className={`py-2 rounded-lg transition ${
//             role === "Restaurant" ? "bg-white shadow font-medium" : ""
//           }`}
//         >
//           Restaurant
//         </button>

//         <button
//           onClick={() => setRole("NGO")}
//           className={`py-2 rounded-lg transition ${
//             role === "NGO" ? "bg-white shadow font-medium" : ""
//           }`}
//         >
//           NGO
//         </button>
//       </div>

//       {/* Login Fields */}
//       <div className="space-y-4">
//         <div>
//           <label className="text-sm text-gray-600">Username</label>
//           <input
//             className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//             placeholder="Enter your username"
//           />
//         </div>

//         <div>
//           <label className="text-sm text-gray-600">Password</label>
//           <input
//             type="password"
//             className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//             placeholder="Enter your password"
//           />
//         </div>
//       </div>

//       {/* Button */}
//       <button className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
//         Sign In as {role}
//       </button>
//     </div>
//   );
// }
