import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved) {
      try {
        const { token, email } = JSON.parse(saved);
        setToken(token);
        setEmail(email);
      } catch {
        console.log("error");
      }
    }
  }, []);

  function handleLogin(data) {
    localStorage.setItem("auth", JSON.stringify(data));
    setToken(data.token);
    setEmail(data.email);
  }
  function logout() {
    localStorage.removeItem("auth");
    setToken(null);
    setEmail(null);
  }
  return (
    <AuthContext.Provider value={{ token, email, login: handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
