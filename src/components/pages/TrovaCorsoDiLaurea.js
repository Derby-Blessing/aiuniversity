import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Col,
  Row,
  FormControl,
  Card,
  Container,
  Button,
  ListGroup,
} from "react-bootstrap";

class TrovaCorsoDiLaurea extends React.Component {
  render() {
    const bg_color = { backgroundColor: "#1A237E" };
    const color = { color: "#1A237E" };
    return (
      <>
        <center>
          <Container fluid style={bg_color}>
            <br></br>
            <Container>
              <Row>
                <Col md="auto">
                  <Card className="text-center">
                    <Card.Header as="h1" style={color}>
                      Trova Corso Di Laurea
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Row>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridselect_uni"
                            >
                              <Form.Label as="h5">Scegli Corso:</Form.Label>
                              <Form.Select aria-label="Default select example">
                                <option> </option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                          Cerca
                        </Button>
                        <br></br>
                        <br></br>

                        <Row>
                          <Col md>
                            <Card>
                              <Card.Header as="h5" style={color}>
                                Università Di Questo Corso:{" "}
                              </Card.Header>
                              <ListGroup variant="flush">
                                <Card.Body>
                                  <ListGroup.Item>
                                    <Card.Link href="#">Unipr</Card.Link>
                                  </ListGroup.Item>
                                  <ListGroup.Item>
                                    <Card.Link href="#">unimore</Card.Link>
                                  </ListGroup.Item>
                                  <ListGroup.Item>
                                    <Card.Link href="#">Card Link</Card.Link>
                                  </ListGroup.Item>
                                </Card.Body>
                              </ListGroup>
                            </Card>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </center>
      </>
    );
  }
}

export default TrovaCorsoDiLaurea;
