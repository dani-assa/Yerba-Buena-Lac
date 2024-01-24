import React from "react";
import { Col, Container, Form, Row, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={6}>
          {registerErrors.map((error, i) => (
            <Alert key={i} variant="danger">
              {error}
            </Alert>
          ))}
          <h3>Login</h3>
          <Form onSubmit={onSubmit}>
            <Form.Group className="" controlId="formBasicDni">
              <Form.Label></Form.Label>
              <Form.Control
                type="number"
                placeholder="DNI (sin puntos)"
                {...register("dni", { required: true })}
              />
              {errors.dni && (
                <Alert key="danger" variant="danger" size="sm">
                  El DNI es requerido.
                </Alert>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <Alert key="danger" variant="danger" size="sm">
                  La contraseña es requerida.
                </Alert>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginFormHook;
