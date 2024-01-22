import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { alertCustom } from '../../utils/alertCustom';
import { message } from '../../utils/menssage';
const URL_BASE = import.meta.env.VITE_URL_BASE;

const Login1 = () => {
  const formDataRef = useRef({
    dni: '',
    password: ''
  });
console.log(formDataRef);
  const [errors, setErrors] = useState({});
  const [flagLogin, setFlagLogin] = useState(false);
  const navigate = useNavigate(); 

const handleChange = (e) => {
  const {name, value} = e.target;
  formDataRef.current= {
    ...formDataRef.current,
    [name]: value
  }
};

const handleSubmit = async(e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formDataRef.current.email) {
    newErrors.email = 'Tienes que escribir un email';
  }

  if (!formDataRef.current.dni) {
    newErrors.dni = 'Tienes que escribir tu DNI';
  }

  if (!formDataRef.current.password) {
    newErrors.password = 'Tienes que escribir una contraseña';
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    const dataLogin = formDataRef.current;
    try {
      setFlagLogin(true);
      const { data } = await axios.get(`${URL_BASE}/users/getAll/?dni=${dataLogin.dni}`);
      const [ user ] = data;
      console.log(data, user, dataLogin);
      if(!user) return alertCustom('Uppss', message.userNotFount, 'warning');

      if(dataLogin.password !== user.password) return alertCustom('Uppss', message.emailOrPasswordBad, 'warning');

      const userJson = JSON.stringify({
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        dni: user.dni,
        userId: user._id,
        role: user.role
      });
      localStorage.setItem('userLog', userJson);
      alertCustom('Good!', 'Login exitoso', 'success', () => navigate('/'))
    } catch (error) {
      console.log(error);
    } finally {
      setFlagLogin(false);
    }
    
  };
}

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={8}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicDni">
            <Form.Label>DNI</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Ingrese su DNI (sin puntos)" 
              name='dni'
              defaultValue={formDataRef.current.dni}
              onChange={handleChange} 
              isValid={formDataRef.current.dni && !errors.dni}
              isInvalid={!!errors.dni}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.dni}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Nice 🙌
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name='password'
              defaultValue={formDataRef.current.password}
              onChange={handleChange}
              isValid={formDataRef.current.password && !errors.password}
              isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Nice 🙌
              </Form.Control.Feedback>
          </Form.Group>
          <Button 
            variant="primary" 
            type="submit" 
            >
            {setFlagLogin ? 'Enviar' : 'Cargando...'}
          </Button>
        </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default Login1;