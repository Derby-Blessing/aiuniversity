import React from 'react';
import UniList from "./object/UniList";
import InfoUni from "./subpages/InfoUni";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Col, ListGroup, Row,FormControl,Card,Container,Button } from 'react-bootstrap';


window.name="pippo"

class TrovaAteneo extends React.Component 
{
  constructor(props)
    {
      super(props)
      
      this.state={
        university: "",
        isSubmit: false,
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event){
      this.setState({
        university: event.target.value,
        isSubmit: false,
      })
      
    }

    handleSubmit(event)
    {
      this.setState({
        university: event.target.value,
        isSubmit: true,
      })
      localStorage.setItem('university', this.state.university);
      event.preventDefault()

    }
  render() {
    const bg_color ={backgroundColor: '#1A237E'};
  const color ={color: '#1A237E'};
  return (
    <>

    {this.state.isSubmit ? <InfoUni ></InfoUni> :
    <Container fluid style={bg_color}>
          <br></br>
        <Container>
        <Row>
        <Col md="auto">
        <Card className="text-center">
    <Card.Header  as="h1"  style={color}>Trova Ateneo</Card.Header>
    <Card.Body>
      <Form onSubmit={this.handleSubmit}>
      <Row >
      <Col md>
    <Form.Group className="mb-3" controlId="formGridselect_uni">
    <Form.Label as="h5">Seleziona L'ateneo*</Form.Label>
    <Form.Select onChange={this.handleChange}>
      <UniList></UniList>
    </Form.Select>
    </Form.Group>
            </Col>
            </Row>
      <Button variant="primary" type="submit" onClick={this.handleClick}>
        Cerca
      </Button>
      <br></br>
      <br></br>
      
    </Form>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  </Container> }
  </>
  )
  }
}
export default  TrovaAteneo



