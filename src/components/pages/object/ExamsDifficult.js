import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ProgressBar, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ExamsDifficult extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            examsDifficult: 0,
            isLoaded: false,
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getExamsDifficultAverangebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                examsDifficult: json.result,
            })
            console.log(this.state.examsDifficult)
        })
    }
    render() {
        var {isLoaded, examsDifficult} = this.state;
        var examsDifficultPerc=(examsDifficult*100)/10;
        if (!isLoaded)
        {
            return <p>Loading...<Spinner animation="border" size="sm" /></p>
        }
        else 
        {
            return <>
            <h6 ><b>Difficoltà degli esami ( difficoltà nel passare gli esami)</b></h6>
            <ProgressBar  animated now={examsDifficultPerc} label={examsDifficult} />
            </>
            
        }
      
    }
}
export default ExamsDifficult