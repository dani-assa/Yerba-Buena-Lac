import React, { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest } from "../api/user";

export const UserContext = createContext();

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuhtProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      console.log(user);
    } catch (error) {
      setErrors(error.response.data);
    }
  };
  return (
    <UserContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
