import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ProgressBar,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LaboratoryAverage extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            labAverage: 0,
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        const link='https://aiuniversity-api.herokuapp.com/getLaboratoryAverangebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                labAverage: json.result,
            })
            console.log(this.state.labAverage)
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    render() {
        var {isLoaded, labAverage, error} = this.state;
        var labAveragePerc=(labAverage*100)/10;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert> 
        }
        else 
        {
            if(!error)
            {
                return <>
                        <h6 ><b>Quantità di attività pratiche nel corso</b></h6>
                        <ProgressBar  animated now={labAveragePerc} label={labAverage} />
                        </>
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }
            
        }
      
    }
}
export default LaboratoryAverage