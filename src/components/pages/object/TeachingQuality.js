import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ProgressBar, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TeachingQuality extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            teachingQuality: 0,
            isLoaded: false,
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getTeachingQualityAverangebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                teachingQuality: json.result,
            })
            console.log(this.state.teachingQuality)
        })
    }
    render() {
        var {isLoaded, teachingQuality} = this.state;
        var teachingQualityPerc=(teachingQuality*100)/10;
        if (!isLoaded)
        {
            return <p>Loading...<Spinner animation="border" size="sm" /></p> 
        }
        else 
        {
            return <>
            <h6 ><b>Qualità dei professori</b></h6>
            <ProgressBar  animated now={teachingQualityPerc} label={teachingQuality} />
            </>
            
        }
      
    }
}
export default TeachingQuality