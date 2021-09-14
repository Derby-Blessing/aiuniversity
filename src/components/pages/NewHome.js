import React from "react";
import { Card, CardGroup, Carousel, Button ,Image, Row, Col} from "react-bootstrap";
import advice from "../images/advice1.jpg";
import trovaUni from "../images/trova_ateneo.png";
import recensisci from "../images/recensisci3.png";
import trovaCorso from "../images/trova-corso.png";

class NewHome extends React.Component {
  render() {
    const color ={color: '#1A237E'};
    const dark ={color: 'black'};
    return (
      <>
      <br/><br/>
        <center>
        
        <Carousel slide="false" indicators="false">
            <Carousel.Item>
              <Card className="d-block w-75"
                alt="first slide">
              <Image variant="top" src={advice} width="80%"/>
              <Card.Body>
                <Card.Title><h2 style={color}>Lasciati consigliare dall'esperienza</h2></Card.Title>
                <Card.Text style={dark}>Devi scegliere il corso di laurea? <br/>
                Non sai quale scegliere e ti senti confuso?
                <br/> <b>Lasciati consigliare da AIuniversity!</b> <br/>
              </Card.Text>
              <a href="/consigliami"><Button>
               Vai
              </Button></a>
              </Card.Body>
              <br/>
            </Card>
              
            </Carousel.Item>

            <Carousel.Item>
            <Card className="d-block w-75"
                alt="Second slide">
              
              
              <Image variant="top" src={recensisci} width="50%"/>
              <Card.Body>
                <Card.Title><h2 style={color}>Raccontaci la tua esperienza</h2></Card.Title>
                <Card.Text  style={dark}>
                 Finalmente un posto in cui si può liberammente recensire il prorio corso di laurea!<br/>
                  Non vedevi l'ora eh? <br/>  <b>Corri a raccontarci la tua esperienza all'università, questa volta sarai tu a valutare! </b><br/>
                  Il tutto in completo anonimato, senza doverti preoccupare di ritorsioni!<br/>
                </Card.Text>
                <a href="/raccontaci-esperienza"><Button
                variant="primary" 
              >
                Vai
              </Button></a>
              <br/>
              </Card.Body>

            </Card>
            </Carousel.Item>
            <Carousel.Item>
            <Card className="d-block w-75"
                alt="third slide">

              <Image variant="top" src={trovaCorso} width="50%"/>
              <Card.Body>
                <Card.Title><h2 style={color}>Trova corso di laurea</h2></Card.Title>
                <Card.Text  style={dark}>
                Trova tutte le informazioni inerenti una particolare laurea,
                utilizzando il  nostro  speciale motore di ricerca che recupera le informazioni direttamente dall'esperienza di altri studenti<br/>
                <br/><b>Alcune infomazioni le puoi trovare solo qui!</b> 
                </Card.Text>
                <a href="/trova-corso-di-laurea"><Button
                variant="primary" 
              >
                Corri a vedere!
              </Button></a>
              <br/>
              </Card.Body>
            </Card>
            </Carousel.Item>
            <Carousel.Item>
            <Card className="d-block w-75"
                alt="third slide">

              <Image variant="top" src={trovaUni} width="50%"/>
              <Card.Body>
                <Card.Title><h2 style={color}>Trova  Ateneo</h2></Card.Title>
                <Card.Text  style={dark}>
                Trova le lauree che ci sono in un determinato ateneo,
                utilizzando il  nostro  speciale motore di ricerca che recupera le informazioni direttamente dall'esperienza di altri studenti<br/>
                <br/><b>Alcune infomazioni le puoi trovare solo qui!</b> 
                </Card.Text>
                <a href="/trova-corso-di-laurea"><Button
                variant="primary" 
              >
                Corri a vedere!
              </Button></a>
              <br/>
              </Card.Body>
            </Card>
            </Carousel.Item>
          </Carousel>
        </center>
      </>
    );
  }
}
export default NewHome;
