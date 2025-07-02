import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // const [token, setToken] = useState(null);
  // const [email, setEmail] = useState(null);

  // useEffect(() => {
  //   const saved = localStorage.getItem("auth");
  //   if (saved) {
  //     try {
  //       const { token, email } = JSON.parse(saved);
  //       setToken(token);
  //       setEmail(email);
  //     } catch {
  //       console.log("error");
  //     }
  //   }
  // }, []);
  const [{ token, email }, setAuth] = useState(() => {
    try {
      const saved = localStorage.getItem("auth");
      return saved ? JSON.parse(saved) : { token: null, email: null };
    } catch {
      return { token: null, email: null };
    }
  });

  function handleLogin(data) {
    localStorage.setItem("auth", JSON.stringify(data));
    // setToken(data.token);
    // setEmail(data.email);
    setAuth({ token: data.token, email: data.email });
  }
  function logout() {
    localStorage.removeItem("auth");
    // setToken(null);
    // setEmail(null);
    setAuth({ token: null, email: null });
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
