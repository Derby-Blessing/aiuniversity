import React from 'react';
import { Alert, Accordion, Spinner, ListGroup,   Form,Col, Row,FormControl,Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DetailDegreeCourse from "../object/DetailDegreeCourse";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { faUsers, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


class GetUniByCourse extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            course: this.props.course,
            uni:[],
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        const link='https://aiuniversity-api.herokuapp.com/getAllUniByCourse/'+ this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                uni: json.result,
            })
            console.log(this.state.course)
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
          localStorage.setItem('arriveByForm', true);
    }
    render() {
        var {isLoaded, uni, error} = this.state;
        const color ={color: '#1A237E'};
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
                        <Accordion flush style={{textAlign: 'left'}}>
                        {uni.map(item=>   
                        (
                            <>
                            <Accordion.Item eventKey={item}>
                              <Accordion.Header><h6 style={{textTransform: 'capitalize'}}>{'\u00A0'}{item} {'\u00A0'}</h6></Accordion.Header>
                              <Accordion.Body>
                            <DetailDegreeCourse uni={item} course={this.state.course}></DetailDegreeCourse>
                              </Accordion.Body>
                            </Accordion.Item>
                            </>
                        ))}
                    </Accordion>
                        
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
export default GetUniByCourse