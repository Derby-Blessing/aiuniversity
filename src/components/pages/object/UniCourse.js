import React from 'react';
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UniCourse extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            courses:[],
            isLoaded: false,
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
        })
    }
    render() {
        var {isLoaded, courses} = this.state;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert>
        }
        else 
        {
           
            return (
            <>
                         <ListGroup variant="flush">
                            {courses.map(item=>(
                                <ListGroup.Item><Link to={{pathname:"/dettaglio-corso", state: {course: item }}}><span style={{textTransform: 'capitalize'}}>{item}</span></Link></ListGroup.Item>
                            ))}
                        </ListGroup>
                
            </>
          )
        }
      
    }
}
export default UniCourse