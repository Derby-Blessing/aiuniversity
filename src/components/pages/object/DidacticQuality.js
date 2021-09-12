import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ProgressBar, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class DidiacticQuality extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            didiacticQuality: 0,
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getDidacticQualityAverangebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                didiacticQuality: json.result,
            })
            console.log(this.state.didiacticQuality)
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    render() {
        var {isLoaded, didiacticQuality,error} = this.state;
        var didiacticQualityPerc=(didiacticQuality*100)/10;
        if (!isLoaded)
        {
            return <p>Loading...<Spinner animation="border" size="sm" /></p>
            
        }

        else 
        {if(!error)
            {
                
                
                    return <>
                        <h6 ><b>Qualità della didattica</b></h6>
                        <ProgressBar  animated now={didiacticQualityPerc} label={didiacticQuality} />
                        </>
                
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }
            
            
        }
      
    }
}
export default DidiacticQuality