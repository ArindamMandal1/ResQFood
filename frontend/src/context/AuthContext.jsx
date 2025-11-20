import { createContext, useState, useContext } from "react";
import api from "../api/axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    setUser(res.data.user);
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  const signup = async (formData) => {
    const res = await api.post("/auth/signup", formData);
    setUser(res.data.user);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
