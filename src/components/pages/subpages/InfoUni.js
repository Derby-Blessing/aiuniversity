import React from 'react';
import { Form,Col, ListGroup, Row,FormControl,Card,Container,Button } from 'react-bootstrap';

class InfoUni extends React.Component {
    render() {
      return (
        <>
            <Col  md="auto">
  <Card.Header  as="h4"  style={color}>Informazione dell'ateneo selezionato: </Card.Header>
  </Col>

  <Row>
      <Col md>
  <Form.Group className="mb-3" controlId="formGridtriennial_end_year">
  <Form.Label as="h5">Regione:</Form.Label>
  <Form.Control />
        </Form.Group>
      </Col>
      <Col md>
  <Form.Group className="mb-3" controlId="formGridtriennial_end_year">
  <Form.Label as="h5">Provincia:</Form.Label>
  <Form.Control />
        </Form.Group>
      </Col>
      </Row>
      <Row>
      <Col md>
  <Form.Group className="mb-3" controlId="formGridtriennial_end_year">
  <Form.Label as="h5">Numero Studenti Sottoscritti:</Form.Label>
  <Form.Control />
        </Form.Group>
      </Col>
      <Col md>
  <Form.Group className="mb-3" controlId="formGridreviews">
  <Form.Label as="h5">Recensioni:</Form.Label>
  <Form.Control />
        </Form.Group>
      </Col>
      </Row>
      <Row>
      <Col md>
      <Card>
  <Card.Header  as="h5"  style={color}>Corsi: </Card.Header>
  <ListGroup variant="flush">
  <Card.Body>
    <ListGroup.Item><Card.Link href="#">Es. Economia</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card.Link</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card Link</Card.Link></ListGroup.Item>
  </Card.Body>
  </ListGroup>
 </Card>
      </Col>
      </Row>
      <Row>
      <Col md>
      <Card>
  <Card.Header  as="h5"  style={color}>Recensioni Ateneo:</Card.Header>
  <ListGroup variant="flush">
  <Card.Body>
    <ListGroup.Item><Card.Link href="#">Recensione</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card.Link</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card Link</Card.Link></ListGroup.Item>
  </Card.Body>
  </ListGroup>
 </Card>
      </Col>
      </Row>
        </>
     );  
    }
                       
  }
  
  
  export default InfoUni
  