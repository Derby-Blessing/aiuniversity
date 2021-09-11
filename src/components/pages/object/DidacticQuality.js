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
        })
    }
    render() {
        var {isLoaded, didiacticQuality} = this.state;
        var didiacticQualityPerc=(didiacticQuality*100)/10;
        if (!isLoaded)
        {
            return <p>Loading...<Spinner animation="border" size="sm" /></p>
            
        }

        else 
        {
            return <>
            <h6 ><b>Qualità della didattica</b></h6>
            <ProgressBar  animated now={didiacticQualityPerc} label={didiacticQuality} />
            </>
            
        }
      
    }
}
export default DidiacticQuality