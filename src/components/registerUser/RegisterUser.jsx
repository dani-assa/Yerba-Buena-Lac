import axios from 'axios';
import React, {useState} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const URL_BASE = import.meta.env.VITE_URL_BASE;


const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordCheck: '',
    role: 'CLIENT'
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    const newErrors = {};

    if(!formData.name) {
      newErrors.name = 'Tienes que escribir un nombre';
    }
    if(!formData.lastName) {
      newErrors.lastName = 'Tienes que escribir un apellido';
    }

    if (!formData.email) {
      newErrors.email = 'Tienes que escribir un email';
    }

    if (!formData.password) {
      newErrors.password = 'Tienes que escribir una contraseña';
    }

    if (formData.password && !passRegex.test(formData.password)) {
      newErrors.password = 'La contraseña no cumple con los requisitos'
    }

    if (!formData.passwordCheck) {
      newErrors.passwordCheck = 'Tienes que escribir una contraseña';
    }

    if (formData.password !== formData.passwordCheck) {
      newErrors.passwordCheck ='Las contraseñas deben coincidir';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    };

    const user = await axios.post(`${URL_BASE}/users`, formData)
  }
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={10}>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Carlos" 
              name='name'
              value={formData.name}
              onChange={handleChange}
              isValid={formData.name && !errors.name}
              isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.name}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Nice 🙌
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Gonzalez" 
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              isValid={formData.lastName && !errors.lastName}
              isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.lastName}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Nice 🙌
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Ej: test@gmail.com" 
              name='email'
              value={formData.email}
              onChange={handleChange}
              isValid={formData.email && !errors.email}
              isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.email}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Nice 🙌
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Contraseña" 
              name='password'
              value={formData.password}
              onChange={handleChange}
              isValid={formData.password && !errors.password}
              isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Nice 🙌
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Repita la contraseña</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Repita la contraseña" 
              name='passwordCheck'
              value={formData.passwordCheck}
              onChange={handleChange}
              isValid={formData.passwordCheck && !errors.passwordCheck}
              isInvalid={!!errors.passwordCheck}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.passwordCheck}
              </Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>
                Nice 🙌
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterUser