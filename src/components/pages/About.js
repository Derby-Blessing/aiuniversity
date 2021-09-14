import React from 'react';
import {
  Form,
  Col,
  Row,
  Image,
  Card,
  Alert,
  CardGroup,
  Button,
  Container,
  CardColumns,
  Breadcrumb,
  ListGroup
} from "react-bootstrap";
import fra from "../images/Fra.jpeg";
import marti from "../images/Marti.jpeg";
import derby from "../images/Derby.jpeg";

class About extends React.Component {
render() {
  const bg_color = { backgroundColor: "#1A237E" };
  const color = { color: "#1A237E" };
  return (
    <>
      <center>
        <Container fluid style={bg_color}>
          <br></br>
          <Container>
          <Card bg="light"  variant="primary">
          <Card.Header as="h1" style={color}>
           Cos'è AIuniversity?
          </Card.Header>
           <Card.Text style={{textAlign: 'left'}}> 
           <ListGroup>
            <ListGroup.Item><h6><span   style={color}><b>AIuniversity</b></span> è una piattaforma che ha lo scopo di aiutare gli studenti prossimi alla maturità o i 
                    maturandi a scegliere il percorso universitario.</h6></ListGroup.Item>
            <ListGroup.Item><h6><span   style={color}><b>AIuniversity</b></span> permette di recuperare  l'esperienza nelle università italiane vissute dagli studenti e
           dalle studentesse, dai laureati e dalle laureate. Questi dati vengono raccolti
            in forma anonima e successivamente aggregati.</h6></ListGroup.Item>
            <ListGroup.Item><h6><span   style={color}><b>AIuniversity</b></span> contiene un'algoritmo di intelligenza artificiale
           in grado di confrontare centinaia di esperienze universitarie e consigliare al maturando il corso di laurea sulla 
           base delle sue esigenze.</h6></ListGroup.Item>
            <ListGroup.Item><h6><span   style={color}><b>AIuniversity</b></span> fornisce degli strumenti di ricerca per trovare le informazioni inerenti ai 
           corsi di laurea e alle loro università.</h6></ListGroup.Item>
            <ListGroup.Item><h6><span   style={color}><b>AIuniversity</b></span> è un sistema in continuo aggiornamento,  creato dagli studenti per aiutare altri studenti nella loro scelta.</h6></ListGroup.Item>
            <ListGroup.Item><h6><span   style={color}><b>AIuniversity</b></span> non contiene i dati ufficiali delle università, ma  recupera i dati dalle  esperienze personali di studenti.
          Pertanto i dati possono mancare o essere imprecisi.</h6></ListGroup.Item>
          <ListGroup.Item><h6><span   style={color}><b>AIuniversity</b></span> garantisce l'anonimato dei dati e non li usa per altre finalità</h6></ListGroup.Item>
          </ListGroup>
                 
           </Card.Text>
          </Card>
          <br></br>
          <Card bg="light" className="text-center" variant="primary">
          <Card.Header > 
          <h1 style={color}>Chi Siamo?</h1>
          
          <Alert variant="primary"><h5>Siamo 3 ragazze frequentanti il terzo anno di ingegneria dei sistemi informativi, presso l'università di Parma.
             <br/>Come tutti i ragazzi alla fine di un percorso, ci siamo trovate davanti a una scelta per il nostro futuro. 
            <br/> Di fronte a questo problema ci siamo chieste come l'intelligenza artificiale potesse aiutarci.<br/> Così abbiamo studiato e lavorato per creare un sistema open source che aiuti le future matricole a scegliere il percorso giusto.
             </h5></Alert>
             </Card.Header>
          <Card.Body className="text-center">
            <blockquote >
      <h4>
        {' '}
        Ci auguriamo che questo sistema sia utile a tutti coloro che devono affrontare la scelta della laurea.<br/> Continueremo a lavorarci nel tempo per migliorarlo e aggiungere nuove funzionalità{' '}
      </h4><br/>
      <footer className="blockquote-footer">
        <cite title="Source Title">Francesca, Derby, Martina</cite>
      </footer>
    </blockquote >

          </Card.Body>
          
          <Row className="justify-content-md-center">
          <Col md="6">
          <CardColumns >
            
          <Card>
              <Card.Img variant="top" src={fra}  />
            <Card.Body >
              <Card.Title>Francesca Rossi</Card.Title>
              <p>Ideatrice - Projet Manager - Full stak developer</p>
           </Card.Body>
           </Card>
           

           <Card>
              <Card.Img variant="top" src={derby}  />
            <Card.Body>
              <Card.Title>Derby Atswei Kommey</Card.Title>
              <p>front end developer</p>
           </Card.Body>
           </Card>
          
           <Card>
           <Row >
              <Col>
              <Card.Img variant="top" src={marti}   />
              </Col>
              </Row>
            <Card.Body>
              <Card.Title>Martina Dominici</Card.Title>
              <p>Data scientist</p>
           </Card.Body>
           </Card>      
           </CardColumns>
           </Col>
           </Row>
           </Card>

          </Container>
          </Container>
        </center>
      </>
    );
  }
}
export default About
