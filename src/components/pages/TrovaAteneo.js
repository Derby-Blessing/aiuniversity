import React from 'react';
import UniList from "./object/UniList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Col, ListGroup, Row,FormControl,Card,Container,Button } from 'react-bootstrap';


class TrovaAteneo extends React.Component {
  render() {
    const bg_color ={backgroundColor: '#1A237E'};
    const color ={color: '#1A237E'};
    return (
      <>
      <center>
      <Container fluid style={bg_color}>
        <br></br>
      <Container>
      <Row>
      <Col md="auto">
      <Card className="text-center">
  <Card.Header  as="h1"  style={color}>Trova Ateneo</Card.Header>
  <Card.Body>
    <Form>
    <Row >
    <Col md>
  <Form.Group className="mb-3" controlId="formGridselect_uni">
  <Form.Label as="h5">Seleziona L'ateneo*</Form.Label>
  <UniList></UniList>
  </Form.Group>
          </Col>
          </Row>
    <Button variant="primary" type="submit">
      Cerca
    </Button>
    <br></br>
    <br></br>
    
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


export default TrovaAteneo



