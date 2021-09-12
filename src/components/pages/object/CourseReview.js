import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CourseReview extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            review_vote: 0,
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getReviewAverangebyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                review_vote: json.result,
            })
            console.log(this.state.review_vote)
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    render() {
        var {isLoaded, review_vote, error} = this.state;
        if (!isLoaded)
        {
            return <Spinner animation="border" variant="warning" /> 
        }
        
        else 
        {
            if(!error)
            {
                if (review_vote ==0)
                    {
                        return <p><i>Nessuna recensione</i></p>
                    }
                else
                {
                    return (
                        <>
                            <ReactStars
                                count={5}
                                value={review_vote}
                                edit={false}
                                size={24}
                                color2={'#ffd700'} />
                            
                        </>
                    )
                }
             }
             else
             {
               return <Alert variant="danger">Impossibile recuperare i dati richiesti</Alert>
             }
            
        }
      
    }
}
export default CourseReview