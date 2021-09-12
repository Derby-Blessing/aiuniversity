import React from 'react';
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl,Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseNumberOfPeople from "../object/CourseNumberOfPeople";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUsers, faArrowRight } from '@fortawesome/free-solid-svg-icons';

class UniCourse extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            courses:[],
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getAllCoursesByUni/'+ this.state.university
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                courses: json.result,
            })
            console.log(this.state.courses)
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    render() {
        var {isLoaded, courses, error} = this.state;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert>
        }
        else 
        {
            if(!error)
            {
                return (
                    <>
                        <ListGroup variant="flush">
                        {courses.map(item=>(
                            <ListGroup.Item><Link to={{pathname:"/dettaglio-corso", state: {course: item }}}>
                                <Button variant="primary"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                {'\u00A0'}{item} {'\u00A0'}<Badge bg="light" text="dark"><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon><CourseNumberOfPeople university={this.state.university} course={item}></CourseNumberOfPeople></Badge>
                                </Button>
                                </Link>
                                </ListGroup.Item>
                        ))}
                    </ListGroup>
                        
                    </>
                    )
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }        
        }
      
    }
}
export default UniCourse