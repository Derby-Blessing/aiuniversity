import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';

class Consigliami extends React.Component {
  render() {
    
    const bg_color ={backgroundColor: '#3399ff'};
    const color ={color: '#3399ff'};
    return (
      <>
      <center>
      <Container fluid style={bg_color}>
  <br></br>
<Container>
<Row>
<Col  md="auto">
  <Card className="text-center">
  <Card.Header as="h2" style={color}>Consigliami</Card.Header>
  <Card.Body>
    <Form>
      <Row >
      <Col md>
      <Form.Group controlId="formGridMaterie">
        <Form.Label>Quali sono le tue materie preferite?</Form.Label>
        <Form.Control as="textarea"  />
      </Form.Group>
      </Col>
      </Row>
      <Row >
    <Col md>
      <Form.Group controlId="formGridHobby">
        <Form.Label>Cos'è il tuo hobby?</Form.Label>
        <Form.Control />
      </Form.Group>
    </Col>
    <Col md>
      <Form.Group as={Col} controlId="formGridDreamJob">
        <Form.Label>Qual è il lavoro dei tuoi sogni</Form.Label>
        <Form.Control />
      </Form.Group>
    </Col>
    </Row>
    <Row>
    <Col md>
      <Form.Group as={Col} controlId="formGridExpectations">
        <Form.Label>Quali sono le tue aspettative sull'università?</Form.Label>
        <Form.Control as="textarea"/>
      </Form.Group>
    </Col>
    </Row>
      <Row>
    <Col md>
      <Form.Group as={Col} controlId="formGridMotives">
        <Form.Label>Quali sono i motivi della tua scelta?</Form.Label>
        <Form.Control as="textarea"/>
      </Form.Group>
    </Col>
    </Row>
    <Row>
    <Col md>
      <Form.Group as={Col} controlId="formGridPrevStudies">
        <Form.Label>Ti piacerebbe continuare con i tuoi studi precedenti?</Form.Label>
        <Form.Control />
      </Form.Group>
      </Col>
      </Row>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Card.Body>
  </Card>
  </Col>
  </Row>
  </Container>
</Container>
  </center>
          </>
        
    );
  }
}

export default Consigliami
