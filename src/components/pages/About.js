import React from 'react';
import {
  Form,
  Col,
  Row,
  Card,
  CardGroup,
  Button,
  Container,
} from "react-bootstrap";

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
          <Card bg="light" className="text-center" variant="primary">
          <Card.Header as="h1" style={color}>
           About AIUniversity
          </Card.Header>
           <Card.Text>
           AIuniversity è una piattaforma che ha lo scopo di aiutare gli studenti prossimi alla maturità o i 
           maturandi a scegliere il percorso universitario.
           AIuniversity permette di recuperare  l'esperienza nelle università italiane vissute dagli studenti e
           dalle studentesse, dai laureati e dalle laureate, nelle università italiane. Questi dati vengono raccolti
            in forma anonima e successivamente aggregati.AIuniversity contiene un'algoritmo di intelligenza artificiale
           in grado di confrontare centinaia di esperienze universitarie e consigliare al maturando il corso di laurea sulla 
           base delle sue esigenze. AIuniversity fornisce degli strumenti di ricerca per trovare le informazioni inerenti ai 
           corsi di laurea e alle loro università.
           AIuniversity è un sistema in continuo aggiornamento,  creato dagli studenti per aiutare altri studenti nella loro scelta.
           AIuniversity non contiene i dati ufficiali delle università, ma  fornisce i dati relativi a esperienze personali di studenti.
          Pertanto i dati possono essere imperfetti o mancare.
          AIuniversity non modifica in alcun modo i dati inseriti dagli studenti.        
           </Card.Text>
          </Card>
          <br></br>
          <Card bg="light" className="text-center" variant="primary">
          <Card.Header as="h1" style={color}>
          Chi Siamo?
          </Card.Header>
          <Card.Text>
          Questo progetto è nato dall'idea 3 ragazze universitaria che studiano presso l'università di Parma 
            al terzo anno della laurea del corso di Ingegneria dei Sistemi Informativi.
          </Card.Text>
          </Card>
          <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" roundedCircle/>
            <Card.Body>
              <Card.Title>Francesca Rossi</Card.Title>
           <Card.Text>
                

           </Card.Text>
           </Card.Body>
           </Card>

           <Card>
            <Card.Img variant="top" src="holder.js/100px160" roundedCircle/>
            <Card.Body>
              <Card.Title>Derby Atswei Kommey</Card.Title>
           <Card.Text>
                

           </Card.Text>
           </Card.Body>
           </Card>

           <Card>
            <Card.Img variant="top" src="holder.js/100px160" roundedCircle/>
            <Card.Body>
              <Card.Title>Martina Dominici</Card.Title>
           <Card.Text>
                

           </Card.Text>
           </Card.Body>
           </Card>

           </CardGroup>
          </Container>
          </Container>
        </center>
      </>
    );
  }
}
export default About
