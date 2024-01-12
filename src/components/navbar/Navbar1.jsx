import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { imgLogo } from './navbar.module.css';


const Navbar1 = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Navbar.Text>
              <Link to='/'>
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
                <Link to='/'
                  className='text-decoration-none link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                >Inicio</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to='/'
                  className='text-decoration-none link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover mx-lg-2'
                >Pacientes</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to='/'
                  className='text-decoration-none link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                >Servicios</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to='/'
                  className='mx-lg-2 text-decoration-none link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                >Sobre nosotros</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to='/'
                  className='text-decoration-none link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'
                >Contacto</Link>
              </Navbar.Text>
              <div className='mt-1'>
                <Button variant='info' size='sm' className='ms-lg-5'>
                  <Link to='/login' className='text-decoration-none fw-semibold text-light'>Iniciar sesión</Link></Button>
                <Navbar.Text>
                  <Link to='/'
                    className='text-decoration-none link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover mx-2 fw-semibold'
                  >Registrate</Link>
                </Navbar.Text>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Navbar1;