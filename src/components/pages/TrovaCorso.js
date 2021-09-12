import React from "react";
import CourseList from "./object/CourseList";
import InfoCorso from "./subpages/InfoCorso";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Col,
  ListGroup,
  Row,
  FormControl,
  Card,
  Container,
  Button,
} from "react-bootstrap";





class TrovaCorso extends React.Component 
{
  constructor(props)
    {
      super(props)
      this.state={
        course: "",
        isSubmit: false,
      }
      
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)

    }

  
    handleChange(event){
      this.setState({
        course: event.target.value,
        isSubmit: false,
      })
      
    }

    handleSubmit(event)
    {
      this.setState({
        course: event.target.value,
        isSubmit: true,
      })
      localStorage.setItem('course', this.state.course);
      localStorage.setItem('arriveByForm', true);
      event.preventDefault()
  }
  render() {
    const information=this.state.isSubmit
    const bg_color ={backgroundColor: '#1A237E'};
  const color ={color: '#1A237E'};
  return (
    <>

    {information ? <InfoCorso></InfoCorso>:
    <Container fluid >
        <br></br>
        <Container >
          <center>
          <Row className="justify-content-md-center">    
          <Col md='auto' >
            <Card>
              <Card.Header  as="h1"  style={color}>Trova Corso</Card.Header>
                <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formGridselect_uni">
                  <Form.Label as="h5" >Seleziona il corso di laurea*</Form.Label>
                    <Form.Select onChange={this.handleChange} required>
                     <CourseList></CourseList>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleClick}>
                  Cerca
                </Button>
                </Form>
                </Card.Body>
            </Card>
          </Col>
          </Row>
          </center>
          <br></br>
      </Container>
  </Container> }
  </>
  )
  }
}
export default TrovaCorso;
