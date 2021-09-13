import React from "react";
import ReactDOM from "react-dom";
import Universities from "./object/Universities.js";
import School from "./object/School.js";
import Province from "./object/Provinces.js";
import Regions from "./object/Regions.js";
import PredictResult from "./object/PredictResult.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Col,
  Alert,
  Row,
  FormControl,
  Card,
  Button,
  Container,
} from "react-bootstrap";








class Recensisci extends React.Component {
  constructor(props)
    {
      super(props)
      this.state={
        age:18, 
        gender:"f",
        hometown:"",
        home_province:"",
        home_region: "",
        outpost:"", 
        study_town:"", 
        study_province:"", 
        study_region:"", 
        study_type:"", 
        university:"", 
        other_uni:"", 
        uni_type:"", 
        department:"", 
        degree_course:"", 
        subject_area:"", 
        enrolment_year:1990, 
        end_year:1990, 
        enrolment_type:"", 
        graduation_grade:0, 
        degree_year:0, 
        average_grade:0, 
        exams_not_done:"", 
        numb_exams_not_done:0, 
        difficult_aspect:"", 
        easy_exams:"", 
        hard_exams:"", 
        redo_choice:"", 
        expectations:"", 
        decision_choice:"", 
        abroad_experience:"", 
        erasmus_type:"", 
        foreign_country: "",
        foreign_city: "",
        change_degree: "",
        high_school:"",
        other_high_school:"",
        main_subject:"",
        favorite_subject: "",
        baccalaureate: 0,
        choice_related_studies: "",
        didactic_quality: 0,
        teaching_quality: 0,
        exams_difficulties: 0,
        subjects_difficulties: 0,
        environment_quality: 0,
        students_relationship: 0,
        laboratories: 0,
        hobby: "",
        dream_job: "",
        review: "",
        stars: 0,
        subscription_type: "student",
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
      console.log(this.state)
    }

    
   
    handleSubmit(event)
    {
      this.setState({
        isSubmit: true
      });
      /*non rimuovere questo codice serve per la predizione*/
      localStorage.setItem('infoStudent',JSON.stringify({
        age: this.state.age,
        gender: this.state.gender,
        region: this.state.home_region,
        province: this.state.home_province,
        high_school: this.state.high_school,
        main_subject: this.state.main_subject,
        prefered_subject: this.state.favorite_subject,
        hobby:  this.state.hobby,
        dream_work: this.state.dream_job,
        uni_aspectations: this.state.expectations,
        uni_decision_choice: this.state.decision_choice,
        continuous_previous_study: this.state.choice_related_studies,
      }));
      localStorage.setItem('infoSubscription',JSON.stringify(this.state));
      localStorage.setItem('arriveByForm', true);
      event.preventDefault()
  
    }
  
  render() 
  {
    const information = this.state.isSubmit
    console.log(information)
    const bg_color = { backgroundColor: "#1A237E" };
    const color = { color: "#1A237E" };
    const required = { color: "red" , fontSize: "11pt" };
    const suggest = { color: "#1A237E" , fontSize: "11pt" };
    return (
      <>
      {information ? 
      <Container fluid >
      <br></br>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="8">
            <Card className="text-center">
              <Card.Header as="h2" style={color}>
              Il corso di laurea consigliato è
              </Card.Header> 
              <Card.Body>
              <PredictResult></PredictResult>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </Container>
      :
        <center>
          <Container fluid style={bg_color}>
            <br></br>
            <Container>
              <Row>
                <Col md="auto">
                  <Card className="text-center">
                    <Card.Header as="h1" style={color}>
                      Recensisci
                    </Card.Header>
                    <Card.Body>
                      <Form onSubmit={this.handleSubmit}>
                      <Row>
                          <Col md>
                          <Form.Group as={Col} controlId="formGridGenere">
                              <Form.Label as="h5">Chi sei? <span style={required}><i>(obbligatorio)</i></span></Form.Label>
                              <Form.Select 
                              defaultValue="scegli tipo" 
                              name="subscription_type" 
                              required
                              onChange={this.handleInputChange} >
                                <option value="student" selected>Studente</option>
                                <option value="graduate">Laureato</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group controlId="formGridAge">
                              <Form.Label as="h5">Quanti anni hai? <span style={required}><i>(obbligatorio)</i></span></Form.Label>
                              <Form.Control 
                              name="age" 
                              required
                              type="number"
                              min="18"
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          <br/>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridGenere">
                              <Form.Label as="h5">Genere? <span style={required}><i>(obbligatorio)</i></span></Form.Label>
                              <Form.Select defaultValue="Scegli"
                              name="gender" 
                              required
                              onChange={this.handleInputChange}
                              >
                                <option value="f">Femmina</option>
                                <option value="m">Maschio</option>
                                <option value="altro">Altro</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <br></br>
                            <Card.Title as="h4" style={color}>
                              Informazioni Geografiche
                            </Card.Title>
                            <br></br>
                            <Row>
                              <Col md="4">
                                <Form.Group controlId="formGridResidence">
                                  <Form.Label as="h5">Comune di provenienza <span style={required}><i>(obbligatorio)</i></span></Form.Label>
                                  <Form.Control 
                                  name="hometown" 
                                  required
                                  onChange={this.handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                              <br/>
                              <Col md="4">
                                <Form.Group controlId="home_province">
                                  <Form.Label as="h5">Provincia di provenienza <span style={required}><i>(obbligatorio)</i></span></Form.Label>
                                  <Form.Select 
                                  name="home_province" 
                                  required
                                  onChange={this.handleInputChange}
                                  aria-label="Default select example">
                                    <Province></Province>
                                    </Form.Select>
                                </Form.Group>
                              </Col>
                              <br/>
                              <Col md ="4">
                                <Form.Group controlId="home_region">
                                  <Form.Label as="h5">Regione di provenienza <span style={required}><i>(obbligatorio)</i></span></Form.Label>
                                  <Form.Select 
                                  name="home_region" 
                                  required
                                  onChange={this.handleInputChange}
                                  aria-label="Default select example">
                                  <Regions></Regions></Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                            <br></br>
                            <Row>
                              <Col md>
                                <Form.Group
                                  as={Col}
                                  controlId="formGridFuorisede"
                                >
                                  <Form.Label as="h5">
                                    Sei fuorisede? <span style={required}><i>(obbligatorio)</i></span>
                                  </Form.Label>
                                </Form.Group>
                                  {["radio"].map((type) => (
                                    <div
                                      key={`inline-${type}`}
                                      className="mb-3"
                                    >
                                      <Form.Check
                                        inline
                                        value="si"
                                        label="Sì"
                                        type={type}
                                        id={`inline-${type}-1`}
                                        name="outpost" 
                                        required
                                        onChange={this.handleInputChange}
                                      />
                                      <Form.Check
                                        inline
                                        value="no"
                                        label="No"
                                        name="outpost" 
                                        required
                                        onChange={this.handleInputChange}
                                        type={type}
                                        id={`inline-${type}-2`}
                                      />
                                    </div>
                                  ))}
                              </Col>
                              </Row>
                            <br></br>
                            <Row>
                              <Col md>
                                <Form.Group controlId="formGridResidence">
                                  <Form.Label as="h5">In che città studi / hai studiato? </Form.Label>
                                  <Form.Control 
                                  name="study_town" 
                                  onChange={this.handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                              <br/>
                              <Col md>
                                <Form.Group controlId="study_province">
                                  <Form.Label as="h5">In che provincia studi / hai studiato? </Form.Label>
                                  <Form.Select 
                                  name="study_province"
                                  onChange={this.handleInputChange}
                                  aria-label="Default select example">
                                  <Province></Province></Form.Select>
                                </Form.Group>
                              </Col>
                              <br/>
                              <Col md>
                                <Form.Group as={Col} controlId="study_region">
                                  <Form.Label as="h5">In che regione studi / hai studiato? </Form.Label>
                                  <Form.Select 
                                  name="study_region"
                                  onChange={this.handleInputChange}
                                  aria-label="Default select example">
                                  <Regions></Regions></Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <br></br>
                        <Card.Title as="h4" style={color}>
                          Informazioni sui tuoi studi
                        </Card.Title>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridstudytype">
                              <Form.Label as="h5">
                                Che tipo di studi stai facendo/ hai fatto? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                            </Form.Group>

                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    value="triennale"
                                    inline
                                    label="Triennale"
                                    name="study_type"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    value="magistrale_unico"
                                    label="Magistrale_unico"
                                    name="study_type"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                          </Col>
                        </Row>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridselect_uni"
                            >
                              <Form.Label as="h5">
                                Che università frequenti? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Select 
                              name="university"
                              required necessityIndicator="label"
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                              <Universities></Universities></Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md>
                            <Form.Group as={Col} controlId="formGriddepartment">
                              <Form.Label as="h5">
                                Altro: 
                              </Form.Label>
                              <Form.Label>
                              <span style={suggest}><i>(Scrivere il nome dell'università se non presente nell'elenco)</i></span> 
                              </Form.Label>
                              <Form.Control
                              name="other_uni"
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          </Row>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridother_uni">
                              <Form.Label as="h5">
                                Tipo di università? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Label>
                              <span style={suggest}><i>(in situazioni non di emergenza)</i></span>
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    value="presenza"
                                    label="IN PRESENZA"
                                    name="uni_type"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    value="telematica"
                                    label="TELEMATICA"
                                    name="uni_type"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGriddepartment">
                              <Form.Label as="h5">
                                Di quale dipartimento fai parte? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Control
                              name="department"
                              required
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          </Row>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group
                              as={Col}
                              controlId="formGriddegree_course"
                            >
                              <Form.Label as="h5">
                                Che corso di laurea frequenti? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Control 
                              name="degree_course"
                              required
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br></br>
                        <Row>
                          <Col>
                        <Form.Group
                          className="mb-3"
                          controlId="formGridsubject_area"
                        >
                          <Form.Label as="h5">
                            Quali sono le discipline principali del tuo corso? <span style={required}><i>(obbligatorio)</i></span>
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Elenca le discipline principali separate da un virgola 
      (ES: scienze ambientali,matematica,biotecnologie agricole,robotica,game developing,sociologia.....)"
                            name="subject_area"
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                        </Col>
                      </Row>
                        <br></br>
                        <Card.Title as="h4" style={color}>
                          Info sulla tua carriera universitaria
                        </Card.Title>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group controlId="formGridenrolment_year">
                              <Form.Label as="h5">
                                In che anno ti sei iscritto? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Control
                              name="enrolment_year"
                              type="number"
                              min="1990"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example"
                              />
                            </Form.Group>
                          </Col>
                          <Form.Group as={Col} controlId="formGridend_year">
                            <Form.Label as="h5">
                              In che anno prevedi di terminare / hai terminato l’università? <span style={required}><i>(obbligatorio)</i></span>
                            </Form.Label>
                            <Form.Control 
                            name="end_year"
                            type="number"
                            min={this.state.enrolment_year}
                            required
                            onChange={this.handleInputChange}
                            />
                          </Form.Group>
                        </Row>
                        <br></br>
                        <Row>
                          <Col >
                            <Form.Group
                              as={Col}
                              controlId="formGridenrolment_type"
                            >
                              <Form.Label as="h5">
                                Tipologia d'iscrizione  <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    value="part_time"
                                    label="PART TIME"
                                    name="enrolment_type"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    value="full_time"
                                    label="FULL TIME"
                                    name="enrolment_type"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                          </Col>
                          </Row>
                          <br/>
                          <Row>
                          <Col>
                            <Form.Group controlId="formGriddegree_year">
                              <Form.Label as="h5">
                                Che anno frequenti? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Control 
                              name="degree_year"
                              type="number"
                              min="1"
                              max="5"
                              required
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group controlId="formGridaverage_grade">
                              <Form.Label as="h5">Che media hai? </Form.Label>
                              <Form.Label>
                              <span style={suggest}><i>(Solo se sei STUDENTE)</i></span>
                              </Form.Label>
                              <Form.Control
                                type="number"
                                step="0.01"
                                min="18"
                                placeholder="Metti 0 se non hai ancora una media, Scrivi 31, per mettere 30 E LODE"
                                name="average_grade" 
                                onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          </Row>
                          <br/>
                          <Row>
                          <Col md="6">
                            <Form.Group
                              as={Col}
                              controlId="formGridexams_not_done"
                            >
                              <Form.Label as="h5">
                                Hai degli esami indietro? 
                              </Form.Label>
                              <Form.Label>
                              <span style={suggest}><i>(Solo se sei STUDENTE)</i></span>
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    value="si"
                                    label="SI"
                                    name="exams_not_done"
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    label="NO"
                                    value="no"
                                    name="exams_not_done"
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                          </Col>
                          <br/>
                          <Col md="6">
                            <Form.Group
                              as={Col}
                              controlId="formGridnumb_exams_not_done"
                            >
                              <Form.Label as="h5">Quanti esami hai lasciato indietro?</Form.Label>
                              <Form.Label>
                              <span style={suggest}><i>(Solo se sei STUDENTE e hai degli esami indietro)</i></span>
                              </Form.Label>
                              <Form.Control 
                              name="numb_exams_not_done"
                              type="number"
                              min="0"
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group controlId="formGridaverage_grade">
                              <Form.Label as="h5">Con che voto di laurea sei uscito? </Form.Label>
                              <Form.Label>
                              <span style={suggest}><i>(Solo se sei LAUREATO)</i></span>
                              </Form.Label>
                              <Form.Control
                                type="number"
                                min="60"
                                placeholder="Scrivi 111, per mettere 110 E LODE"
                                name="graduation_grade" 
                                onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          </Row>
                          <br/>
                        <Row>
                        <br></br>
                        <Col >
                        <Form.Group
                          as={Col}
                          controlId="formGriddifficult_aspect"
                        >
                          <Form.Label as="h5">
                            Qual'è/ è stato l'ASPETTO del tuo corso che ti ha messo più
                            in difficoltà? <span style={required}><i>(obbligatorio)</i></span>
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Es. i professori, l'ambiente, le materie, l organizzazione della didattica..."
                            name="difficult_aspect"
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                        </Col>
                        </Row>
                        <br></br>
                        <Row>
                        <Col md="6">
                        <Form.Group as={Col} controlId="formGrideasy_exams">
                          <Form.Label as="h5">
                            Quali sono stati gli ESAMI che hai trovato
                            più FACILI? 
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Es (diritto pubblico, diritto privato, informatica)"
                            name="easy_exams"
                                    
                                    onChange={this.handleInputChange}
                         />
                        </Form.Group>
                        </Col>
                        <Col md="6">
                        <Form.Group as={Col} controlId="formGridhard_exams">
                          <Form.Label as="h5">
                            Quali sono stati  gli ESAMI che hai trovato
                            più DIFFICILI? 
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Es (diritto pubblico, diritto privato, informatica)"
                            name="hard_exams" 
                            onChange={this.handleInputChange}
                         />
                        </Form.Group>
                        </Col>
                        </Row>
                        <br></br>
                        <Row>
                          <Col md = "6">
                            <Form.Group
                              as={Col}
                              controlId="formGridredo_choice"
                            >
                              <Form.Label as="h5">
                                Se potessi tornare indietro, sceglieresti di
                                nuovo questo corso di laurea? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    value="si"
                                    label="SI"
                                    name="redo_choice"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    value="no"
                                    label="NO"
                                    name="redo_choice"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                          </Col>
                          <br/>
                          <Col md = "6">
                          <Form.Group as={Col} controlId="formGridexpectations">
                            <Form.Label as="h5">
                              Cosa ti aspettavi da questo corso di studi? <span style={required}><i>(obbligatorio)</i></span>
                            </Form.Label>
                            <Form.Control 
                            name="expectations"
                            required
                            placeholder="Raccontaci le tue aspettative su questa laurea prima di intramprendere questo percorso"
                            as="textarea"
                            onChange={this.handleInputChange}
                            />
                          </Form.Group>
                          </Col>
                        </Row>
                        <br></br>
                        <Row>
                        <Col md = "6">
                          <Form.Group as={Col} controlId="formGridexpectations">
                            <Form.Label as="h5">
                              Come mai hai scelto questo corso di laurea? <span style={required}><i>(obbligatorio)</i></span>
                            </Form.Label>
                            <Form.Control 
                            name="decision_choice"
                            required
                            placeholder="Raccontaci il/i  motivo/i che ti ha spinto ad iscriverti"
                            as="textarea"
                            onChange={this.handleInputChange}
                            />
                          </Form.Group>
                          </Col>
                          </Row>
                          <br/>
                        <Card.Title as="h4" style={color}>
                          Esperienze all'estero
                        </Card.Title>
                        <br></br>
                        <Row>
                          <Col>
                            <Form.Group
                              as={Col}
                              controlId="formGridabroad_experience"
                            >
                              <Form.Label as="h5">
                                Hai fatto un’esperienza all’estero durante la
                                tua carriera univeristaria? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    value="si"
                                    label="SI"
                                    name="abroad_experience"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    label="NO"
                                    value="no"
                                    name="abroad_experience"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                          </Col>
                          </Row>
                          <Row>
                          <Col md="4">
                            <Form.Group
                              className="mb-3"
                              controlId="formGriderasmus_type"
                            >
                              <Form.Label as="h5">
                                Che tipo di esperienza? 
                              </Form.Label>
                              <Form.Control 
                              name="erasmus_type"
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group
                              className="mb-3"
                              controlId="formGridforeign_country"
                            >
                              <Form.Label as="h5">
                                In che stato estero hai svolto la tua
                                esperienza? 
                              </Form.Label>
                              <Form.Control 
                              name="foreign_country"
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group
                              className="mb-3"
                              controlId="formGridforeign_city"
                            >
                              <Form.Label as="h5">
                                In che città estera hai svolto la tua
                                esperienza? 
                              </Form.Label>
                              <Form.Control
                              name="foreign_city"                            
                              onChange={this.handleInputChange}
                               />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br></br>
                        <Card.Title as="h4" style={color}>
                          Cambi di corso
                        </Card.Title>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group
                              as={Col}
                              controlId="formGridchange_degree"
                            >
                              <Form.Label as="h5">
                                Hai mai cambiato corso durante questa laurea? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    value="si"
                                    label="SI"
                                    name="change_degree"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    label="NO"
                                    value="no"
                                    name="change_degree"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                          </Col>

                        </Row>
                        
                        <Card.Title as="h4" style={color}>
                          Info Scuole Superiori
                        </Card.Title>
                        <br></br>
                        <Row>
                          <Col md="6">
                            <Form.Group
                              className="mb-3"
                              controlId="select_highschool"
                            >
                              <Form.Label as="h5">
                                Che scuola hai fatto alle superiori? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Select 
                              name="high_school"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                                <School></School>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md="6">
                            <Form.Group
                              className="mb-3"
                              controlId="formGridmain_subject"
                            >
                              <Form.Label as="h5">
                                Altro 
                              </Form.Label>
                              <Form.Label >
                              <Form.Label>
                              <span style={suggest}><i>(Solo se la tua scuola non era presente nella lista)</i></span>
                              </Form.Label>
                               
                              </Form.Label>
                              <Form.Control 
                              name="other_high_school"
              
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          </Row>
                          <br/>
                          <Row>
                          
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridmain_subject"
                            >
                              <Form.Label as="h5">
                                Quali erano le materie principali della tua
                                scuola? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Control 
                              name="main_subject"
                              required
                              placeholder="Es. (italiano, storia, geografia)"
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridfavorite_subject"
                            >
                              <Form.Label as="h5">
                                Qual era la tua/ le tue materie preferita? <span style={required}><i>(obbligatorio)</i></span> 
                              </Form.Label>
                              <Form.Control 
                              name="favorite_subject"
                              as="textarea"
                              required
                              placeholder="Es. (italiano, storia...)"
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          <br/>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridbaccalaureate"
                            >
                              <Form.Label as="h5">
                                Che voto hai preso alla maturita? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Control 
                              name="baccalaureate"
                              required
                              min="60"
                              type="number"
                              onChange={this.handleInputChange}
                              placeholder="Metti 101 se sei uscito con 100 e lode" />
                            </Form.Group>
                          </Col>
                            <br/>
                          <Col md>
                            <Form.Group
                              as={Col}
                              controlId="formGridchoice_related_studies"
                            >
                              <Form.Label as="h5">
                                Hai scelto un corso di laurea inerente agli
                                studi delle superiori? <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    value="si"
                                    label="SI"
                                    name="choice_related_studies"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    label="NO"
                                    value="no"
                                    name="choice_related_studies"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </div>
                              ))}
                          </Col>
                        </Row>
                        <br></br>
                        <Row>
                        <Col md="auto">
                          <Card className="text-center">
                            <Card.Header as="h4" style={color}>
                              Assegna una valutazione da 1 a 10 alle seguenti
                              caratteristiche riguardanti la tua università 
                            </Card.Header>
                            <Form.Label as="h5">
                              METTI 0 SE, in base alla tua esperienza, NON PUOI
                              VALUTARLO.
                            </Form.Label>
                          </Card>
                        </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGriddidactic_quality"
                            >
                              <Form.Label as="h5">
                                Qualità dell'offerta formativa <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Select 
                              name="didactic_quality"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                                <option>Seleziona</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <br/>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridteaching_quality"
                            >
                              <Form.Label as="h5">
                                Qualità dell’insegnamento dei professori <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Select 
                              name="teaching_quality"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                                <option>Seleziona</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridexams_difficulties"
                            >
                              <Form.Label as="h5">
                                Difficoltà degli esami <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Select 
                              name="exams_difficulties"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                                <option>Seleziona</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <br/>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridsubjects_difficulties"
                            >
                              <Form.Label as="h5">
                                Difficoltà delle materie <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Select 
                              name="subjects_difficulties"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                                <option>Seleziona</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridenvironment_quality"
                            >
                              <Form.Label as="h5">
                                Qualità degli spazi di ateneo <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Select 
                              name="environment_quality"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                                <option>Seleziona</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <br/>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridstudents_relationship"
                            >
                              <Form.Label as="h5">
                                Qualità del rapporto con i colleghi <span style={required}><i>(obbligatorio)</i></span>
                              </Form.Label>
                              <Form.Select 
                              name="students_relationship"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                                <option>Seleziona</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                        <Col md>
                          <Form.Group
                            className="mb-3"
                            controlId="formGridlaboratories"
                          >
                            <Form.Label as="h5">
                              Quanto sono presenti attività pratiche progettuali
                              o di laboratorio? <span style={required}><i>(obbligatorio)</i></span>
                            </Form.Label>
                            
                            <Form.Select 
                              name="laboratories"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                                <option>Seleziona</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </Form.Select>
                          </Form.Group>
                        </Col>
                        </Row>
                          <br></br>
                          <Card.Title as="h4" style={color}>
                            Altre info
                          </Card.Title>
                          <br></br>
                          <Row>
                            <Col md>
                              <Form.Group
                                className="mb-3"
                                controlId="formGridhobby"
                              >
                                <Form.Label as="h5">
                                  Quali sono i tuoi hobby? <span style={required}><i>(obbligatorio)</i></span>
                                </Form.Label>
                                <Form.Control
                                name="hobby"
                                required
                                onChange={this.handleInputChange}
                                  as="textarea"
                                  placeholder="(separa i vari hobby con una virgola)"
                                />
                              </Form.Group>
                            </Col>
                            <br/>
                            <Col md>
                              <Form.Group
                                className="mb-3"
                                controlId="formGriddream_job"
                              >
                                <Form.Label as="h5">
                                  Qual è/sono il/i lavoro/i dei tuoi sogni? <span style={required}><i>(obbligatorio)</i></span>
                                </Form.Label>
                                <Form.Control
                                name="dream_job"
                                as="textarea"
                                placeholder="(se ci sono più lavori, separali con una virgola)"
                                required
                                onChange={this.handleInputChange}
                                 />
                              </Form.Group>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col>
                              <Form.Group
                                className="mb-3"
                                controlId="formGridreview"
                              >
                                <Form.Label as="h5">
                                  Lascia una recensione sul tuo corso laurea <span style={required}><i>(obbligatorio)</i></span>
                                </Form.Label>
                                <Form.Control
                                name="review"
                                required
                                onChange={this.handleInputChange}
                                  as="textarea"
                                  placeholder="(raccontaci di più su questo corso e sulla tua personale esperienza.)"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <br/>
                          <Row>
                            <Col>
                          <Form.Label as="h5">Stelle recensione<span style={required}><i>(obbligatorio)</i></span></Form.Label>
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
                        </Col>
                        </Row>
                        <br/>
                        <Button variant="primary" type="submit" id ="submit_button">
                          Conferma e invia
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </center>
     
                              }</>
    );
  }
}
export default Recensisci;
