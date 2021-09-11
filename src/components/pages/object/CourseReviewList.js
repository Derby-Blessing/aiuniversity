import React from 'react';
import ReactStars from 'react-stars';
import { Alert, Spinner, ListGroup,   Form,Col, Row,FormControl, Card ,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CourseReview extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            course: this.props.course,
            reviews:[],
            isLoaded: false,
        }
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getReviewListbyCourse/'+ this.state.university+'/'+this.state.course
        
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                reviews: json.result,
            })
            console.log(this.state.reviews)
        })
    }
    render() {
        var {isLoaded, reviews} = this.state;
        if (!isLoaded)
        {
            return <Spinner animation="border" variant="warning" /> 
        }
        else 
        {

            if (reviews.length  < 1)
            {
                return <Alert> Non è stata trovata nessuna recensione per questo corso</Alert>
            }
           else
           {
            return (
            <>

                        {reviews.map(item=>(
                            
                                <><br></br><Row className="justify-content-md-center">
                                    <Col md="10">
                                        <Card border="primary">
                                        <Card.Body>
                                                <ReactStars
                                                    count={5}
                                                    value={item.stars}
                                                    edit={false}
                                                    size={24}
                                                    color2={'#ffd700'}></ReactStars>
                                            {item.review}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <br></br>
                            </>

                        ))}
                
                
            </>
           
          )
        }
        
    }
      
}
}
export default CourseReview