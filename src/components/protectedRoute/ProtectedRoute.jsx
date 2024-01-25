import React from "react";
import { useAuth } from "../../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import LoadingScreen from "../loadingScreen/LoadingScreen";

const ProtectedRoute = () => {
  const { user, isAuthenticated, loading } = useAuth();

  if(loading) return <LoadingScreen />
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;
  // if (isAuthenticated && user.role === "admin")
  //   return <Navigate to="/admin" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
