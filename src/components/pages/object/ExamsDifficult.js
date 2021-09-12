import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ProgressBar, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ExamsDifficult extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            examsDifficult: 0,
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getExamsDifficultAverangebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                examsDifficult: json.result,
            })
            console.log(this.state.examsDifficult)
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    render() {
        var {isLoaded, examsDifficult, error} = this.state;
        var examsDifficultPerc=(examsDifficult*100)/10;
        if (!isLoaded)
        {
            return <p>Loading...<Spinner animation="border" size="sm" /></p>
        }
        else 
        {
            if(!error)
            {

                    return <>
                        <h6 ><b>Difficoltà degli esami </b><i>( difficoltà nel passare gli esami, organizzazione delle sessioni di esame)</i></h6>
                        <ProgressBar  animated now={examsDifficultPerc} label={examsDifficult} />
                        </>
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }  
        }
      
    }
}
export default ExamsDifficult