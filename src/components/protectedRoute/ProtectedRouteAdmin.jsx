import React from "react";
import { useAuth } from "../../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteAdmin = () => {
  const { user, isAuthenticated, loading } = useAuth();

  if (isAuthenticated && !(user.role === "admin"))
    return <Navigate to="/results" replace />;

  return <Outlet />;
};

export default ProtectedRouteAdmin;
