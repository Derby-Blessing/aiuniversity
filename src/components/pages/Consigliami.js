import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Col, Row,FormControl,Card } from 'react-bootstrap';

class Consigliami extends React.Component {
  render() {
    return (
      <>
      <center>
  <Card className="text-center" border="info" style={{ width: '50rem' }}>
  <Card.Header as="h2">Consigliami</Card.Header>
  <Card.Body>
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridMaterie">
        <Form.Label>Quali sono le tue materie preferite?</Form.Label>
        <Form.Control as="textarea"  />
      </Form.Group>
      </Row>
    <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridHobby">
        <Form.Label>Cos'è il tuo hobby?</Form.Label>
        <Form.Control />
      </Form.Group>
      </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridDreamJob">
        <Form.Label>Qual è il lavoro dei tuoi sogni</Form.Label>
        <Form.Control />
      </Form.Group>
      </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridExpectations">
        <Form.Label>Quali sono le tue aspettative sull'università?</Form.Label>
        <Form.Control />
      </Form.Group>
      </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridMotives">
        <Form.Label>Quali sono i motivi della tua scelta?</Form.Label>
        <Form.Control />
      </Form.Group>
      </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPrevStudies">
        <Form.Label>Ti piacerebbe continuare con i tuoi studi precedenti?</Form.Label>
        <Form.Control />
      </Form.Group>
      </Row>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Card.Body>
  </Card>
  </center>
          </>
        
    );
  }
}

export default Consigliami
