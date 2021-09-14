import React from 'react';
import ReactStars from 'react-stars';
import GetUniByCourse from "./GetUniByCourse";
import ReviewAlgorithm from "../subpages/ReviewAlgorithm";
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
        const link='https://aiuniversity-api.herokuapp.com/predict'
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
              console.log(localStorage.getItem('infoSubscription'))
              
                if(localStorage.getItem('infoSubscription') !='null')
                {
                  if(predict == '')
                  {
                    <Alert variant="warning">Questa scuola superiore non era presente nei nostri server, grazie per averla inserita!</Alert>
                  }
                  {
                  return (<> <Alert variant="success"><h1 style={{textTransform: 'capitalize'}}><b>{predict}</b></h1></Alert>
                          <ReviewAlgorithm course={predict}></ReviewAlgorithm></>)
                  }
                }
                else
                {
                  if(predict =='')
              {
                <Alert variant="warning">Non abbiamo trovato la tua scuola superiore nei nostri server. <br/> Riprova più avanti nel caso qualche studente la inserisca.</Alert>
              }
              else{
                    return (<>
                    <Alert variant="success"><h1 style={{textTransform: 'capitalize'}}><b>{predict}</b></h1></Alert>
                    <h2 style={color}>Ulteriori informazioni:</h2>
                    <GetUniByCourse course={predict}></GetUniByCourse>
                    </>)
                }
              }
                
             }
             else
             {
               return <Alert variant="danger">Impossibile effettuare il consiglio, contatta l'amministratore se il problema persiste</Alert>
             }
            
            
        }
      
    }
}
export default PredictResult