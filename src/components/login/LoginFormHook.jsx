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
  const { signin, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={6}>
          {signinErrors.map((error, i) => (
            <Alert key={i} variant="danger">
              {error}
            </Alert>
          ))}
          <h3>Login</h3>
          <Form onSubmit={onSubmit}>
            <Form.Group className="" controlId="formBasicDni">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="DNI (sin puntos)"
                {...register("dni", { required: true })}
              />
              {errors.dni && (
                <p key="danger" className="text-danger">
                  El DNI es requerido.
                </p>
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
                <p key="danger" className="text-danger">
                  La contraseña es requerida.
                </p>
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
