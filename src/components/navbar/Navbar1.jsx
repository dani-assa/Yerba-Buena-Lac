import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { imgLogo } from "./navbar.module.css";
import { useAuth } from "../../context/UserContext";

const Navbar1 = () => {
  // const user = JSON.parse(localStorage.getItem("userLog")) || undefined;
  const { user } = useAuth();
  console.log(user);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Navbar.Text>
              <Link to="/">
                <img
                  src="https://i.ibb.co/0c2cSsr/2.png"
                  alt="YB Lac"
                  className={imgLogo}
                />
              </Link>
            </Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Text>
                <Link
                  to="/"
                  className="text-decoration-none link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                >
                  Inicio
                </Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link
                  to="/"
                  className="text-decoration-none link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover mx-lg-2"
                >
                  Pacientes
                </Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link
                  to="/"
                  className="text-decoration-none link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                >
                  Servicios
                </Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link
                  to="/"
                  className="mx-lg-2 text-decoration-none link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                >
                  Sobre nosotros
                </Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link
                  to="/"
                  className="text-decoration-none link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                >
                  Contacto
                </Link>
              </Navbar.Text>
              {user ? (
                <>
                  <li className="nav-item mt-2 ms-lg-5">
                    <b className="mb-3">Bienvenid@ {user.name}</b>
                  </li>
                  <li className="nav-item">
                    <Button
                      variant="info"
                      size="sm"
                      className="mt-1 ms-lg-3 text-ligth fw-semibold"
                      onClick={cerrarSesion}
                    >
                      Cerrar sesión
                    </Button>
                  </li>
                </>
              ) : (
                <div className="mt-1">
                  <Button variant="info" size="sm" className="ms-lg-5">
                    <Link
                      to="/login"
                      className="text-decoration-none fw-semibold text-light"
                    >
                      Iniciar sesión
                    </Link>
                  </Button>
                  <Navbar.Text>
                    <Link
                      to="/register"
                      className="text-decoration-none link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover mx-2 fw-semibold"
                    >
                      Registrate
                    </Link>
                  </Navbar.Text>
                </div>
              )}
              {user?.role === "admin" ? (
                <li className="nav-item">
                  <Button
                    variant="dark"
                    size="sm"
                    className="mt-1 ms-3 text-ligth fw-semibold"
                    onClick={() => navigate("/admin")}
                  >
                    Panel Admin
                  </Button>
                </li>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
