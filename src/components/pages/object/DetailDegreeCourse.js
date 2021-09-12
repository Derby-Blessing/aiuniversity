import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subjects from "../object/Subjects";
import EasyExams from "../object/EasyExams";
import HardExams from "../object/HardExams";
import CourseReview from "../object/CourseReview";
import CourseReviewList from "../object/CourseReviewList";
import CourseNumberOfPeople from "../object/CourseNumberOfPeople";
import VoteAverage from "../object/VoteAverage";
import DegreeAverage from "../object/DegreeAverage";
import DurationAverage from "../object/DurationAverage";
import DidacticQuality from "../object/DidacticQuality";
import LaboratoryAverage from "../object/LaboratoryAverage";
import TeachingQuality from "../object/TeachingQuality";
import ExamsDifficult from "../object/ExamsDifficult";
import SubjectsDifficult from "../object/SubjectsDifficult";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { Form,Col, ListGroup, Row,CardGroup, Card,Container,Button } from 'react-bootstrap';
import { faUsers, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class DetailDegreeCourse extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      university: this.props.uni,
      course: this.props.course,
      form:localStorage.getItem('arriveByForm'),
      
    }
   
    console.log(this.state.form)
    console.log(this.state.course)
  }
    render() {
    const form=this.state.form;
      const bg_color ={backgroundColor: '#1A237E'};
      const color ={color: '#1A237E'};
      var LinkCustom;
      if (form=='false') {
        LinkCustom = ()=>{ return <Link to={{pathname:"/info-ateneo", state: {university: this.state.university}}}><p style={{textTransform: 'capitalize'}}><i>{this.state.university}</i></p></Link>}
      } else {
        LinkCustom = ()=>{return <p style={{textTransform: 'capitalize'}}><i>{this.state.university}</i></p>}
      }
      return (
        <>

        <Card >
          <Card.Header style={color}>
              <Row>
                <Col md="6">
                <p><FontAwesomeIcon icon={faUsers}/> Esperienze raccolte: <CourseNumberOfPeople university={this.state.university} course ={this.state.course}></CourseNumberOfPeople></p> 
                </Col>
              </Row>
            <h3 style={{textTransform: 'capitalize'}}>Corso di laurea in {this.state.course}</h3> 
            <LinkCustom></LinkCustom>
            <CourseReview university={this.state.university} course ={this.state.course}></CourseReview>
            
            </Card.Header>
            <Row>
              <Col md="4">
                <Card.Body >
                  <Card.Title><b>Durata media:</b></Card.Title> <p style={color}><DurationAverage university={this.state.university} course ={this.state.course}></DurationAverage></p>
                </Card.Body>
              </Col>
              <Col md="4">
  
                <Card.Body >
                  <Card.Title><b>Media voti esami:</b></Card.Title><p style={color}> <VoteAverage university={this.state.university} course ={this.state.course}></VoteAverage></p>
                </Card.Body>
              </Col>
              <Col md="4">
                <Card.Body >
                  <Card.Title><b>Media voto di laurea:</b></Card.Title><p style={color}> <DegreeAverage university={this.state.university} course ={this.state.course}></DegreeAverage></p>
                </Card.Body>
                
            </Col>
            </Row>
            </Card >
        <Card>
        <Card.Body >
        <Card.Title><b>Valutazioni degli studenti</b></Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item><DidacticQuality university={this.state.university} course ={this.state.course}></DidacticQuality></ListGroup.Item>
            <ListGroup.Item><TeachingQuality university={this.state.university} course ={this.state.course}></TeachingQuality></ListGroup.Item>
            <ListGroup.Item><ExamsDifficult university={this.state.university} course ={this.state.course}></ExamsDifficult></ListGroup.Item>
            <ListGroup.Item><SubjectsDifficult university={this.state.university} course ={this.state.course}></SubjectsDifficult></ListGroup.Item>
            <ListGroup.Item><LaboratoryAverage university={this.state.university} course ={this.state.course}></LaboratoryAverage></ListGroup.Item>
          </ListGroup>
        </Card.Body>
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
          
       
  
 
</>
   );  
  }
                     
}


export default DetailDegreeCourse