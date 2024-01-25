import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import Admin from "./pages/Admin";
import Results from "./pages/Results";
import Navbar1 from "./components/navbar/Navbar1";
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar1 />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/results" element={<Results />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
