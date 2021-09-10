import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { Form,Col, ListGroup, Row,Card,Container,Button } from 'react-bootstrap';

class DettaglioCorso extends React.Component {
    render() {
      const bg_color ={backgroundColor: '#1A237E'};
      const color ={color: '#1A237E'};
      return (
        <>
        <center>
        <Container fluid style={bg_color}>
          <br></br>
        <Container>
            
  <br></br>
   <br></br>
        <Row>
        <Col md="auto">
        <Card className="text-center">
    <Card.Header  as="h1"  style={color}>Dettaglio Corso</Card.Header>
    <Card.Header  as="h5"  style={color}>Le Materie Del Corso: </Card.Header>
      <ListGroup variant="flush">
  <Card.Body>
    <ListGroup.Item><Card.Link href="#">Recensione</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card.Link</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card Link</Card.Link></ListGroup.Item>
  </Card.Body>
  </ListGroup>
        <br></br>
        <br></br>
        <Card.Header  as="h5"  style={color}>Esami Ritenuti Più Facili: </Card.Header>
      <ListGroup variant="flush">
  <Card.Body>
    <ListGroup.Item><Card.Link href="#">Recensione</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card.Link</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card Link</Card.Link></ListGroup.Item>
  </Card.Body>
  </ListGroup>

  <br></br>
        <br></br>
        <Card.Header  as="h5"  style={color}>Esami Ritenuti Più Difficili: </Card.Header>
      <ListGroup variant="flush">
  <Card.Body>
    <ListGroup.Item><FontAwesomeIcon icon={ faCoffee } /><Card.Link href="#">Recensione</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card.Link</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card Link</Card.Link></ListGroup.Item>
  </Card.Body>
  </ListGroup>

   <Card>
        <Card.Body>
        <FontAwesomeIcon icon="fa-solid fa-person" />
        <FontAwesomeIcon icon="fa-solid fa-person-dress" />
        </Card.Body>
    </Card>
  <br></br>
        <br></br>
        <ListGroup variant="flush">
  <Card.Body>
    <ListGroup.Item>Media Voti:</ListGroup.Item>
    <ListGroup.Item>Media Voto Laurea:</ListGroup.Item>
    <ListGroup.Item>Durata Media:</ListGroup.Item>
  </Card.Body>
  </ListGroup>
    
        <br></br>
        <br></br>
    <Card.Header  as="h5"  style={color}>Valutazioni Degli Studenti: </Card.Header>
    <ListGroup variant="flush">
  <Card.Body>
    <ListGroup.Item>Docenti:</ListGroup.Item>
    <ListGroup.Item>Ambiente:</ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Chiedi Altra</Card.Link></ListGroup.Item>
  </Card.Body>
  </ListGroup>

  <br></br>
        <br></br>
    <Card.Header  as="h5"  style={color}>Recensione: </Card.Header>
    <ListGroup variant="flush">
  <Card.Body>
    <ListGroup.Item></ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
  </Card.Body>
  </ListGroup>

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


export default DettaglioCorso