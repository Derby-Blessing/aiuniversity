import React from 'react';
import Region from "../object/Region";
import Province from "../object/Province";
import UniNumberOfPeople from "../object/UniNumberOfPeople";
import UniReview from "../object/UniReview";
import UniCourse from "../object/UniCourse";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Form,Col, ListGroup, Row,FormControl,Card,Container, CardGroup, Button } from 'react-bootstrap';
import { faMapMarker, faUsers } from '@fortawesome/free-solid-svg-icons';

class InfoUni extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      university: localStorage.getItem('university')
      
    }
  }
  
  
  render (){
      return (
        <>

            <Container fluid>
              <Container>
                <Row className="justify-content-md-center">
                  <Col >
                  <Card>
                    <Card.Header  as="h4" style={{textTransform: 'capitalize'}} >{this.state.university}<UniReview university={this.state.university}></UniReview></Card.Header>
                  </Card>
                  </Col>
                </Row>
                <CardGroup>
                  <Card >
                    <Card.Body >
                      <Card.Title><b>Esperienze raccolte:  </b><UniNumberOfPeople university={this.state.university}></UniNumberOfPeople></Card.Title>
                    </Card.Body>
                  </Card>

                  <Card >
                    <Card.Body >
                      <Card.Title><b>Regione </b><Region university={this.state.university}></Region></Card.Title>
                    </Card.Body>
                  </Card>

                  <Card >
                    <Card.Body >
                      <Card.Title><b>Provincia </b><Province university={this.state.university}></Province> </Card.Title>
                    </Card.Body>
                  </Card>
                  </CardGroup>
                  <Row>
                    <Col>
                    <Card >
                    <Card.Body >
                    <Card.Title>Corsi di laurea</Card.Title>
                      <UniCourse university={this.state.university}></UniCourse>
                    </Card.Body>
                  </Card>
                    </Col>
                  </Row>
              </Container>
            </Container>
 
        </>
     );  
      }               
  }
  
  
export default InfoUni
  