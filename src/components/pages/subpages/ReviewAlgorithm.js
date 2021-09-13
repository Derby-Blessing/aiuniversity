import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Universities from "../object/Universities.js";
import { Form, Col, Row, FormControl, Card, Container } from "react-bootstrap";



class ReviewAlgorithm extends React.Component {
  render() {
    const bg_color = { backgroundColor: "#1A237E" };
    const color = { color: "#1A237E" };
    return (
      <>
        
          <Container fluid style={bg_color}>
            <br></br>
            <Container>
              <Row>
                <Col md="auto">
                  <Card >
                    <Card.Header as="h2" style={color}>
                      Lasciaci un feedback per migliorare l'algoritmo
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Row>
                          <Col md>
                            <Form.Group
                              as={Col}
                              controlId="formGriduni_advised"
                            >
                              <Form.Label as="h5">
                                Il consiglio che ti abbiamo dato coincide con la
                                tua università di scelta?*
                              </Form.Label>
                            </Form.Group>
                            <Form>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    label="Sì"
                                    name="uni_advised"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    label="No"
                                    name="uni_advised"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                            </Form>
                          </Col>
                        </Row>

                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group
                              as={Col}
                              controlId="formGriduni_comparison"
                            >
                              <Form.Label as="h5">
                                Quanto è lontano dai tuoi studi il corso
                                consigliato?*
                              </Form.Label>
                            </Form.Group>
                            <Form>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    label="Corso completamente diverso"
                                    name="uni_comparison"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    label="Materie di studio simili alle mie"
                                    name="uni_comparison"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                  <Form.Check
                                    label="Materie di studio uguale alle mie ma nome diverso"
                                    name="uni_comparison"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                  <Form.Check
                                    label="Uguale al corso da me scelto"
                                    name="uni_comparison"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </div>
                              ))}
                            </Form>
                          </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group
                              as={Col}
                              controlId="formGriduni_decision"
                            >
                              <Form.Label as="h5">
                                Se tornassi indietro cosa faresti?*
                              </Form.Label>
                            </Form.Group>
                            <Form>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    label="Rifarei la stessa scelta che ho fatto"
                                    name="uni_decision"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    label="Sceglierei il corso consigliato da quest'algoritmo
          (se diversa dal tuo)"
                                    name="uni_decision"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                  <Form.Check
                                    label="Farei una scelta completamente diversa"
                                    name="uni_decision"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </div>
                              ))}
                            </Form>
                          </Col>
                        </Row>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGriddiff_uni"
                            >
                              <Form.Label as="h5">
                                Se faresti una "SCELTA COMPLETAMENTE DIVERSA", cosa
                                sceglieresti?*
                              </Form.Label>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md>
                            <Form.Group controlId="formGriddiff_uni">
                            <Form.Select 
                              defaultValue="scegli tipo" 
                              name="subscription_type" 
                              required
                              onChange={this.handleInputChange} >
                              <Universities></Universities>
                              </Form.Select >
                            </Form.Group>
                          </Col>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGriddiff_uni"
                            >
                              <Form.Control placeholder="Corso di laurea" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridalgorithm">
                              <Form.Label as="h5">
                                Pensi che l'algoritmo possa aiutare i ragazzi
                                nella scelta del corso di laurea?*
                              </Form.Label>
                            </Form.Group>
                            <Form>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    label="Sì"
                                    name="algorithm"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    label="No"
                                    name="algorithm"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                            </Form>
                          </Col>
                          </Row>
                          <br/>
                          <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridvalutation">
                              <Form.Label as="h5">
                                Che voto daresti a questo algoritmo:*
                              </Form.Label>
                              <Form.Select 
                          name="stars"
                          required
                          onChange={this.handleInputChange}
                          aria-label="Default select example">
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                          </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <br></br>
                        <Form.Group
                          as={Col}
                          controlId="formGriddifficult_aspect"
                        >
                          <Form.Label as="h5">
                            Lacsciaci una tua personale opinione sull'algoritmo.
                            </Form.Label>
                            <Form.Label as="h5">
                            Ti è piacuta l'idea? Hai dei consigli su come
                            miglioriamo?*
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Es. i professori, l'ambiente, le materie, l organizzazione della didattica..."
                          />
                        </Form.Group>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        
      </>
    );
  }
}

export default ReviewAlgorithm;
