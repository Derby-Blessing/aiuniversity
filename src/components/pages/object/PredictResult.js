import React from 'react';
import ReactStars from 'react-stars';
import GetUniByCourse from "./GetUniByCourse";
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
        isLoaded: true,
      })).catch(e => {this.setState({
        error:true, 
        errorName: e,
        isLoaded:true, 
    })
      })
      localStorage.setItem('arriveByForm', false)
      localStorage.setItem('infoStudent', "")
      console.log(JSON.stringify(this.state.infoStudent) )
      console.log(requestOptions )
      console.log('chiamata')
      console.log(this.state.predict)
    }
    render() {
        var {isLoaded, predict, error} = this.state;
        const color = { color: "#1A237E" };
        if (!isLoaded)
        {
            return <p>Sto confrontando i dati{'\u00A0'}<Spinner animation="grow" variant="dark" size="sm" />{'\u00A0'}<Spinner animation="grow" variant="secondary" size="sm" />{'\u00A0'}<Spinner animation="grow" variant="light" size="sm" />   </p>
        }
        else 
        {
            if(!error)
            {
               
                    return (<>
                    <Alert variant="success"><h1 style={{textTransform: 'capitalize'}}><b>{predict}</b></h1></Alert>
                    <h2 style={color}>Ulteriori informazioni:</h2>
                    <GetUniByCourse course={predict}></GetUniByCourse>
                    </>)
                    
                
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }
            
            
        }
      
    }
}
export default PredictResult