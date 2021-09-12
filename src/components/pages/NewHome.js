import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";

class NewHome extends React.Component {
  render() {
    return (
      <>
        <center>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="Imaggini/advice1.jpg/100px160" />
              <Card.Body>
                <Card.Title>Consigliami</Card.Title>
                <Card.Text>La pagina consigliami.....</Card.Text>
              </Card.Body>
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleClick}
              >
                Vedi
              </Button>
            </Card>
            <Card>
              <Card.Img variant="top" src="Imaggini/trova_uni3.jpg/100px160" />
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
                type="submit"
                onClick={this.handleClick}
              >
                Vedi
              </Button>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="Imaggini/recensisci3.jpg/100px160" />
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
                Vedi
              </Button>
            </Card>
            <Card>
              <Card.Img variant="top" src="Imaggini/cosigliami2.jpg/100px160" />
              <Card.Body>
                <Card.Title>Hai Bisogno di Altri Informazioni?</Card.Title>
                <Card.Text>Hai Bisogno di Altri Informazioni?</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Trova Corso Di Laurea</Card.Link>
                <Card.Link href="#">ATrova Ateneo</Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </center>
      </>
    );
  }
}
export default NewHome;
