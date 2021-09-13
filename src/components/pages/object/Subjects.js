import React from 'react';
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Subjects extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            subjects:[],
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        const link='https://aiuniversity-api.herokuapp.com/getAllSubjectsByUni/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                subjects: json.result,
            })
            console.log(this.state.subjects)
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    render() {
        var {isLoaded, subjects, error} = this.state;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert>
        }
        else 
        {
            if(!error)
            {
                return (
                    <>
                                 <ListGroup variant="flush">
                                    {subjects.map(item=>(
                                        <ListGroup.Item><span style={{textTransform: 'capitalize'}}>{item}</span></ListGroup.Item>
                                    ))}
                                </ListGroup>
                        
                    </>
                  )
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }
            
        }
      
    }
}
export default Subjects