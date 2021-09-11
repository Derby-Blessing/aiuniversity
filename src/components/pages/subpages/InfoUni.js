import React from 'react';
import Region from "../object/Region";
import Province from "../object/Province";
import UniNumberOfPeople from "../object/UniNumberOfPeople";
import UniReview from "../object/UniReview";
import UniCourse from "../object/UniCourse";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Form,Col, ListGroup, Row,FormControl,Card,Container, CardGroup, Button } from 'react-bootstrap';
import { faMapMarker, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class InfoUni extends React.Component {
  constructor(props)
  {
    super(props)
    var {uni}="";
    if(localStorage.getItem('arriveByForm'))
    {
        uni = localStorage.getItem('university')
    }
    else
    {
        uni=props.location.state
    }
    this.state={
      university: uni
      
    }
  }
  
  
  render (){
    const bg_color ={backgroundColor: '#1A237E'};
    const color ={color: '#1A237E'};
      return (
        <>

            <Container fluid>
              <Container>
                <Row className="justify-content-md-center">
                  <Col >
                  <Card>
                    <Card.Header   style={color} >
                      <Row>
                      <Col md="auto" >
                          <Link to={{pathname:"/trova-ateneo" }}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Cerca un altro ateneo</Link>
                        </Col>
                      </Row>
                      <br/>
                      <Row>
                        <Col md="auto">
                      <h3 style={{textTransform: 'capitalize'}}>{this.state.university}</h3>
                        </Col>
                        <Col md="auto">
                          <UniReview university={this.state.university}></UniReview>
                          </Col>
                      </Row>
                      <Row>
                        <Col md="auto">
                          <p><FontAwesomeIcon icon={faUsers}/><b> Esperienze raccolte:  </b><UniNumberOfPeople university={this.state.university}></UniNumberOfPeople></p>
                        </Col>
                      </Row>
      
                    </Card.Header>
                  </Card>
                  </Col>
                </Row>
                <CardGroup>
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
  