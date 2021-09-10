import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subjects from "../object/Subjects";
import EasyExams from "../object/EasyExams";
import HardExams from "../object/HardExams";
import CourseReview from "../object/CourseReview";
import CourseReviewList from "../object/CourseReviewList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { Form,Col, ListGroup, Row,Card,Container,Button } from 'react-bootstrap';

class DettaglioCorso extends React.Component {
  constructor(props)
  {
    const {course} = props.location.state
    super(props)
    this.state={
      university: localStorage.getItem('university'),
      course: course
      
    }
    console.log(this.state.university)
    console.log(this.state.course)
  }
    render() {
      const bg_color ={backgroundColor: '#1A237E'};
      const color ={color: '#1A237E'};
      return (
        <>
        <Container fluid style={bg_color}>
          <br></br>
        <Container>
            
  <br></br>
   <br></br>
        <Row>
        <Col >
        <Card >
          <Card.Header    style={color}><h1 style={{textTransform: 'capitalize'}}>Corso di laurea in {this.state.course}</h1> 
          <p style={{textTransform: 'capitalize'}}><i>{this.state.university}</i></p><CourseReview university={this.state.university} course ={this.state.course}></CourseReview>
          </Card.Header>
        </Card>
        <Card >
        <Card.Body>
          <Card.Title><b>Cosa si studia?</b></Card.Title>
          <Subjects university={this.state.university} course ={this.state.course}></Subjects>  
        </Card.Body>
        </Card>
        <Card >
        <Card.Body>
          <Card.Title><b>Esami ritenuti più facili:</b></Card.Title>
          <EasyExams university={this.state.university} course ={this.state.course}></EasyExams>  
        </Card.Body>
        </Card>
        <Card >
        <Card.Body>
          <Card.Title><b>Esami ritenuti più difficili:</b></Card.Title>
          <HardExams university={this.state.university} course ={this.state.course}></HardExams>  
        </Card.Body>
        </Card>
        <Card >
          <Card.Header style={color}><h2>Recensioni degli studenti</h2>
          </Card.Header>
          <CourseReviewList university={this.state.university} course ={this.state.course}></CourseReviewList>
        </Card>
          
       
  </Col>
  </Row>
  </Container>
  <br></br>
</Container>
 
</>
   );  
  }
                     
}


export default DettaglioCorso