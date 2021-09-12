import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DurationAverage extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            durationAverage: 0,
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getDurationAveragebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                durationAverage: json.result,
            })
            console.log(this.state.durationAverage)
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    render() {
        var {isLoaded, durationAverage, error} = this.state;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert> 
        }
        else 
        {
            if(!error)
            {
                if (durationAverage =='undefined')
                    {
                        return <p><i>Nessun durata è stata trovata</i></p>
                    }
                else
                {
                    return <span><b>{durationAverage}</b></span>

                }
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }
            
        }
      
    }
}
export default DurationAverage