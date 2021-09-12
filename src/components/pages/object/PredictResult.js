import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PredictResult extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            infoStudent: JSON.parse(localStorage.getItem('infoStudent')), 
            predict: '',
            isLoaded: false,
            error:false, 
            errorName: "",
        }
        console.log(localStorage.getItem('infoStudent'))
        console.log('inizio')
    }
 
    componentDidMount()
    {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.infoStudent)
          };
        const link='http://localhost:8008/predict'
        fetch(link,requestOptions)
      .then(response => response.json())
      .then(json => this.setState({
        predict: json.result,
        isLoaded: true
      })).catch(e => {this.setState({
        error:true, 
        errorName: e,
        isLoaded:true, 
    })
      })
      console.log(JSON.stringify(this.state.infoStudent) )
      console.log(requestOptions )
      console.log('chiamata')
      console.log(this.state.predict)
    }
    render() {
        var {isLoaded, predict, error} = this.state;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert> 
        }
        else 
        {
            if(!error)
            {
               
                    return <span><b>{predict}</b></span>
                
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }
            
            
        }
      
    }
}
export default PredictResult