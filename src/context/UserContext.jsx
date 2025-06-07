import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  
  const saveSession = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  // LOGIN
  const login = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Error al iniciar sesión");

      const data = await res.json();
      saveSession(data.token, data.email);
      return true;
    } catch (error) {
      console.error("Login fallido:", error.message);
      return false;
    }
  };

  // REGISTER
  const register = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Error al registrarse");

      const data = await res.json();
      saveSession(data.token, data.email);
      return true;
    } catch (error) {
      console.error("Registro fallido:", error.message);
      return false;
    }
  };

  // LOGOUT
  const logout = () => {
    setToken("");
    setEmail("");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // GET PROFILE
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("No se pudo obtener el perfil");

      const data = await res.json(); 
      setEmail(data.email);
      localStorage.setItem("email", data.email);
      return data;
    } catch (error) {
      console.error("Error al obtener el perfil:", error.message);
      return null;
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
