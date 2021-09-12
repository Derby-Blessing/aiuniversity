import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DegreeAverage extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            degreeAverage: 0,
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getGradeAveragebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                degreeAverage: json.result,
            })
            console.log(this.state.degreeAverage)
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    render() {
        var {isLoaded, degreeAverage,error} = this.state;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert> 
        }
        
        else 
        {
            if(!error)
            {
                if (degreeAverage ==0)
                {
                    return <p><i>Nessun voto è stato trovato</i></p>
                }
                else
                {
                    return <span><b>{degreeAverage}</b></span>
                }
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }
            return <span><b>{degreeAverage}</b></span>
            
        }
      
    }
}
export default DegreeAverage