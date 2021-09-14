import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Universities from "../object/Universities.js";
import AddInformation from "../object/AddInformation";
import { Form, Col, Row, FormControl, Card, Container } from "react-bootstrap";



class ReviewAlgorithm extends React.Component {
  constructor(props)
    {
      super(props)
      var subscrpInfo=JSON.parse(localStorage.getItem('infoSubscription'))
      var uni=""
      var degree=""
      if(subscrpInfo != null)
      {
        uni=subscrpInfo.university
        degree=subscrpInfo.degree_course
      }
      this.state={
        degree_course_input: uni, 
        degree_predict: this.props.course,
        university_input: degree,
        degree_predict_correct: "", 
        difference_between_course: 0,
        choosing_course_if_back: 0,
        degree_dream: "",
        uni_dream: "",
        aiuniversity_is_util: "",
        stars_aiuniversity: 0,
        review_aiuniversity: "",
      }
      
      console.log(this.state)
      console.log('inizio')
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleInputChange(event) {
      const target = event.target;
      const value =  target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
      console.log(JSON.stringify(this.state))
    }

   
    handleSubmit(event)
    {
      localStorage.setItem('feedbackAI',JSON.stringify(this.state));
      this.setState({
        isSubmit: true
      });
      localStorage.setItem('arriveByForm', false);
      event.preventDefault()
  }
  render() {
    const information = this.state.isSubmit
    const bg_color = { backgroundColor: "#1A237E" };
    const color = { color: "#1A237E" };
    const required = { color: "red" , fontSize: "11pt" };
    return (
      <>
        {information ?

        
             <AddInformation></AddInformation>
            
            
             
             : 

              <Row >
                <Col md="auto">
                  <Card style={{textAlign: 'left'}} >
                    <Card.Header as="h2" style={color}>
                      Lasciaci un feedback sull'algoritmo di predizione
                    </Card.Header>
                    <Card.Body>
                      <Form onSubmit={this.handleSubmit}>
                        <Row>
                          <Col md>
                            <Form.Group
                              as={Col}
                              controlId="formGriduni_advised"
                            >
                              <Form.Label as="h5">
                                Il consiglio che ti abbiamo consigliato coincide con il corso di laurea che effettivamente
                                hai scelto?<span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                            </Form.Group>
                            <Form>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    onChange={this.handleInputChange}
                                    value="si"
                                    label="Si"
                                    name="degree_predict_correct"
                                    type={type}
                                    required
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    onChange={this.handleInputChange}
                                    value="no"
                                    label="No"
                                    name="degree_predict_correct"
                                    type={type}
                                    required
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
                                Quanto è distante dai tuoi studi il corso
                                consigliato? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                            </Form.Group>
                            <Form>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    label="Corso completamente diverso"
                                    value="1"
                                    onChange={this.handleInputChange}
                                    name="difference_between_course"
                                    type={type}
                                    required
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    label="Materie di studio simili alle mie"
                                    value="2"
                                    onChange={this.handleInputChange}
                                    name="difference_between_course"
                                    type={type}
                                    required
                                    id={`inline-${type}-2`}
                                  />
                                  <Form.Check
                                    label="Materie di studio uguale alle mie ma nome diverso"
                                    name="difference_between_course"
                                    value="3"
                                    onChange={this.handleInputChange}
                                    type={type}
                                    required
                                    id={`inline-${type}-3`}
                                  />
                                  <Form.Check
                                    label="Uguale al corso che avevo scelto io"
                                    name="difference_between_course"
                                    value="4"
                                    onChange={this.handleInputChange}
                                    type={type}
                                    required
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
                                Immagina di poter tornare indietro nel tempo, cosa faresti? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                            </Form.Group>
                            <Form>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    label="Rifarei la stessa scelta che ho fatto"
                                    name="choosing_course_if_back"
                                    value="1"
                                    onChange={this.handleInputChange}
                                    required
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    label="Sceglierei il corso consigliato da quest'algoritmo
          (se diversa dal tuo)"
                                    name="choosing_course_if_back"
                                    type={type}
                                    value="2"
                                    onChange={this.handleInputChange}
                                    required
                                    id={`inline-${type}-2`}
                                  />
                                  <Form.Check
                                    label="Farei una scelta completamente diversa"
                                    name="choosing_course_if_back"
                                    type={type}
                                    value="3"
                                    onChange={this.handleInputChange}
                                    required
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
                                Se la risposta precedente è stata  "AVREI FATTO UNA SCELTA COMPLETAMENTE DIVERSA", che corso avresti scelto?
                              </Form.Label>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md>
                            <Form.Group controlId="formGriddiff_uni">
                            <Form.Select 
                              defaultValue="scegli tipo" 
                              name="uni_dream" 
                             
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
                              <Form.Control 
                              placeholder="Corso di laurea" 
                              name="degree_dream" 
                              onChange={this.handleInputChange} 
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridalgorithm">
                              <Form.Label as="h5">
                                Pensi che l'algoritmo possa aiutare i maturandi
                                nella scelta del corso di laurea? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                            </Form.Group>
                            <Form>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    required
                                    onChange={this.handleInputChange}
                                    label="Sì"
                                    value="si"
                                    name="aiuniversity_is_util"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    required
                                    onChange={this.handleInputChange}
                                    label="No"
                                    value="no"
                                    name="aiuniversity_is_util"
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
                                Che voto daresti a questo algoritmo <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Select 
                          name="stars_aiuniversity"
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
                        <Row>
                          <Col>
                        <Form.Group
                          as={Col}
                          controlId="formGriddifficult_aspect"
                        >
                          <Form.Label as="h5">
                            Lacsciaci una tua personale opinione sull'algoritmo.
                            </Form.Label>
                            <Form.Label as="h5">
                            Ti è piacuta l'idea? Hai dei consigli su come
                            miglioriamo? <span style={required}><i>(obbligatorio)</i></span>
                          </Form.Label>
                          <Form.Control
                          name="review_aiuniversity"
                            as="textarea"
                            required
                            onChange={this.handleInputChange}
                            placeholder="Es. i professori, l'ambiente, le materie, l organizzazione della didattica..."
                          />
                        </Form.Group>
                        </Col>
                        </Row>
                        <br/>
                        <Row>
                        <Col>
                        <Button variant="primary" type="submit" id ="submit_button">
                          Invia
                        </Button>
                        </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
        }
      </>
    );
  }
}

export default ReviewAlgorithm;
