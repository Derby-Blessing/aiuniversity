import React from "react";
import { Card, CardGroup, Button , Row, Col} from "react-bootstrap";
import advice from "../images/advice1.jpg";
import trovaUni from "../images/trova_ateneo.png";
import recensisci from "../images/recensisci3.png";
import trovaCorso from "../images/trova-corso.png";

class NewHome extends React.Component {
  render() {
    return (
      <>
        <center>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={advice} height="50%"/>
              <Card.Body>
                <Card.Title>Consigliami</Card.Title>
                <Card.Text>La pagina consigliami.....</Card.Text>
              </Card.Body>
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleClick}
              >
               <Card.Link href="/consigliami">Vedi</Card.Link> 
              </Button>
            </Card>
            <Card>
              <Card.Img variant="top" src={recensisci} height="50%"/>
              <Card.Body>
                <Card.Title>Lasciaci Una Recensione</Card.Title>
                <Card.Text>
                  Hai avuta una buona esperienza con AIUniversity? Hai trovato
                  l'ateneo che volevi?
                </Card.Text>
              </Card.Body>
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleClick}
              >
                <Card.Link href="/recensisci">Vedi</Card.Link> 
              </Button>
            </Card>
            <Card>
              <Card.Img variant="top" src={trovaUni} height="50%" />
              <Card.Body>
                <Card.Title>Trova Ateneo</Card.Title>
                <Card.Text>
                  Non sei sicura di quale ateneo vuoi frequentare? Sei indecisa
                  su quale corso è giusto per te? Non preoccuparti più....Siamo
                  qui per aiutarti.......
                </Card.Text>
              </Card.Body>
              <Button
                variant="primary"
              >
                <Card.Link href="/recensisci">Vedi</Card.Link> 
              </Button>
            </Card>
            <Card>
              <Card.Img variant="top" src={trovaCorso}  height="50%"/>
              <Card.Body>
              sdjdjiojsf
              </Card.Body>
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleClick}
              >
                Vedi
              </Button>
            </Card>
          </CardGroup>
        </center>
      </>
    );
  }
}
export default NewHome;
