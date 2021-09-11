import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner,Badge, Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';

class UniReview extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            review_vote:-1,
            isLoaded: false,
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getReviewAverangebyUni/'+ this.state.university
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                review_vote: json.result,
            })
        })
    }
    render() {
        var {isLoaded, review_vote} = this.state;
        if (!isLoaded)
        {
            return <Spinner animation="border" variant="warning" /> 
        }
        else if (review_vote ==0)
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
}
export default UniReview