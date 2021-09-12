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
import TeachingQuality from "../object/TeachingQuality";
import ExamsDifficult from "../object/ExamsDifficult";
import SubjectsDifficult from "../object/SubjectsDifficult";
import DetailDegreeCourse from "../object/DetailDegreeCourse";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { Form,Col, ListGroup, Row,CardGroup, Card,Container,Button } from 'react-bootstrap';
import { faUsers, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class DettaglioCorso extends React.Component {
  constructor(props)
  {
    const {course} = props.location.state
    super(props)
    this.state={
      university: localStorage.getItem('university'),
      course: course
      
    }
    localStorage.setItem('arriveByForm', false);
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
          <DetailDegreeCourse uni={this.state.university} course={this.state.course}></DetailDegreeCourse>
       
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