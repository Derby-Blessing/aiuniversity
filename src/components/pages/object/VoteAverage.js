import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class VoteAverage extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            voteAverage: 0,
            isLoaded: false,
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getMarkAveragebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                voteAverage: json.result,
            })
            console.log(this.state.voteAverage)
        })
    }
    render() {
        var {isLoaded, voteAverage} = this.state;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert> 
        }
        else if (voteAverage == 0)
        {
            return <p><i>Nessun voto è stato trovato</i></p>
        }
        else 
        {
            return <span><b>{voteAverage}</b></span>
            
        }
      
    }
}
export default VoteAverage