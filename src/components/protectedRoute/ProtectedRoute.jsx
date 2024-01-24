import React from "react";
import { useAuth } from "../../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (isAuthenticated && user.role === "admin")
    return <Navigate to="/admin" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
