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
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        const link='https://aiuniversity-api.herokuapp.com/getTeachingQualityAverangebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                teachingQuality: json.result,
            })
            console.log(this.state.teachingQuality)
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    render() {
        var {isLoaded, teachingQuality, error} = this.state;
        var teachingQualityPerc=(teachingQuality*100)/10;
        if (!isLoaded)
        {
            return <p>Loading...<Spinner animation="border" size="sm" /></p> 
        }
        else 
        {if(!error)
            {
                return <>
                <h6 ><b>Qualità dei professori</b></h6>
                <ProgressBar  animated now={teachingQualityPerc} label={teachingQuality} />
                </>
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }
            
            
        }
      
    }
}
export default TeachingQuality