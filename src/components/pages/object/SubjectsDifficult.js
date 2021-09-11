import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ProgressBar, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SubjectsDifficult extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            subjectsDifficult: 0,
            isLoaded: false,
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getSubjectsDifficultAverangebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                subjectsDifficult: json.result,
            })
            console.log(this.state.subjectsDifficult)
        })
    }
    render() {
        var {isLoaded, subjectsDifficult} = this.state;
        var subjectsDifficultPerc=(subjectsDifficult*100)/10;
        if (!isLoaded)
        {
            return <p>Loading...<Spinner animation="border" size="sm" /></p>
        }
        else 
        {
            return <>
            <h6 ><b>Difficoltà delle materie <i>(difficoltà di comprensione, mole di studio elevata...)</i></b></h6>
            <ProgressBar  animated now={subjectsDifficultPerc} label={subjectsDifficult} />
            </>
            
        }
      
    }
}
export default SubjectsDifficult