import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    isAuth ? <Outlet /> : <Navigate to='/' />
  )
};

export default ProtectedRoute;