import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function validate() {
    const err = {};
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      err.email = "Valid email required";
    }
    if (!form.password || form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }
    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);

    // Simulated API call
    await new Promise((r) => setTimeout(r, 700));

    setSubmitting(false);
    navigate("/dashboard"); // OR wherever you want
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Content */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg bg-green-600 text-white flex items-center justify-center text-2xl">
                🍽️
              </div>
              <div>
                <h2 className="font-bold text-lg">Login Form</h2>
                <div className="text-sm text-slate-500">
                  Please login to verify your identity
                </div>
              </div>
            </div>

            <div className="text-l text-slate-600">
              After login, you'll be able to create posts to share surplus food.
            </div>
          </div>

          {/* Right Side Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
                placeholder="you@example.com"
              />
              {errors.email && (
                <div className="text-xs text-red-500 mt-1">
                  {errors.email}
                </div>
              )}
            </div>

            <div>
              <label className="text-sm text-slate-600">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
                placeholder="password"
              />
              {errors.password && (
                <div className="text-xs text-red-500 mt-1">
                  {errors.password}
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-60"
              >
                {submitting ? "Loading..." : "Login"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
