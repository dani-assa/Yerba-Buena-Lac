import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { card } from './cardsHome.module.css'


const CardsHome = () => {
  return (
    <Container>
      <Row className='justify-content-between my-4'>
        <Col sm={4}>
          <Card className={card}>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/89/65/47/89654779cea5c146b8ac3ae8c8998a1d.jpg" />
            <Card.Body>
              <Card.Title>Profesionales Expertos</Card.Title>
              <Card.Text>
              Nuestro equipo está conformado por profesionales altamente capacitados, con una amplia trayectoria y experiencia que garantizan seguridad en los análisis y calidez en la atención.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className={card}>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/f9/e5/2f/f9e52fb567162cbe454f872cead34fee.jpg" />
            <Card.Body>
              <Card.Title>Amplia gama de prácticas</Card.Title>
              <Card.Text>
              Contamos con más de 400 prácticas bioquímicas para ofrecer a nuestros pacientes en diversas áreas: Hematología; Hemostasia, Química Clínica; Microbiología; Endocrinología y Metabolismo; Autoinmunidad y Alergia; Intolerancias alimentarias; Virología e Inmunoserología; Toxicología y Monitoreo de drogas; Screening Neonatal.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className={card}>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/02/d8/90/02d890cba7a120874f5fd4bc594bc1ef.jpg" />
            <Card.Body>
              <Card.Title>Tecnología de excelencia</Card.Title>
              <Card.Text>
              Nuestros laboratorios están equipados con herramientas e instrumentos tecnológicos de última generación para brindar excelencia en la calidad, efectividad en las pruebas y sobre todo confianza en los resultados de cada análisis.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CardsHome