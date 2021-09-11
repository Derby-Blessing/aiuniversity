import React from 'react';
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HardExams extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            exams:[],
            isLoaded: false,
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getAllHardExams/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                exams: json.result,
            })
            console.log(this.state.exams)
        })
    }
    render() {
        var {isLoaded, exams} = this.state;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert>
        }
        else 
        {
           
            return (
            <>
                    <ListGroup variant="flush">
                    {exams.map(item=>(
                        <ListGroup.Item><span >{item}</span></ListGroup.Item>
                    ))}
                </ListGroup>
                
            </>
          )
        }
      
    }
}
export default HardExams