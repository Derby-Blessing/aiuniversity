import React from 'react';
import GetUniByCourse from "../object/GetUniByCourse";
import Province from "../object/Province";
import UniNumberOfPeople from "../object/UniNumberOfPeople";
import UniReview from "../object/UniReview";
import UniCourse from "../object/UniCourse";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Form,Col, Alert, ListGroup, Row,FormControl,Card,Container, CardGroup, Button } from 'react-bootstrap';
import { faMapMarker, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class InfoCorso extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      course: localStorage.getItem('course')
      
    }
    this.refreshPage = this.refreshPage.bind(this)
  }
   refreshPage(){
    window.location.reload();
   }
  
  render (){
    const bg_color ={backgroundColor: '#1A237E'};
    const color ={color: '#1A237E'};
      return (
        <>
            <Container fluid>
            <br/> <br/> 
              <Container>
                <Row className="justify-content-md-center">
                  <Col >
                    <Card>
                    <Card.Header >
                    <Row > 
                        <Col>
                        <Link onClick={this.refreshPage }><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>Cerca un altro corso</Link> 
                        </Col>
                      </Row>
                      <Row style={{textAlign: 'center'}}> 
                        <Col>
                      <h2 style={color}>Corso di laurea in:</h2><h1> {this.state.course} </h1> 
                      </Col>
                      </Row>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>Elenco delle università dove è disponibile il corso:</Card.Title>
                        <GetUniByCourse course={this.state.course}></GetUniByCourse>
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
  
  
export default InfoCorso
  