import React from "react";
import ReactDOM from "react-dom";
import Universities from "./object/Universities.js";
import School from "./object/School.js";
import Province from "./object/Provinces.js";
import Regions from "./object/Regions.js";
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
        gender:"",
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
        enrolment_year:0, 
        end_year:0, 
        enrolment_type:"", 
        graduation_grade:"", 
        degree_year:"", 
        exams_not_done:"", 
        numb_exams_not_done:"", 
        difficult_aspect:"", 
        easy_exams:"", 
        hard_exams:"", 
        redo_choice:"", 
        expectations:"", 
        abroad_experience:"", 
        erasmus_type:"", 
        foreign_country: "",
        foreign_city: "",
        change_degree: "",
        high_school:"",
        other_high_school:"",
        main_subject:"",
        high_school:"",
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
        subscription_date: "",
        subscription_type: false,
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
      localStorage.setItem('infoStudent',JSON.stringify({
        age: this.state.age,
        gender: this.state.gender,
        region: this.state.region,
        province: this.state.province,
        high_school: this.state.high_school,
        main_subject: this.state.main_subject,
        prefered_subject: this.state.prefered_subject,
        hobby:  this.state.hobby,
        dream_work: this.state.dream_work,
        uni_aspectations: this.state.uni_aspectations,
        uni_decision_choice: this.state.uni_decision_choice,
        continuous_previous_study: this.state.continuous_previous_study,
      }));
      this.setState({
        isSubmit: true
      });
      localStorage.setItem('arriveByForm', false);
      event.preventDefault()
  
    }
  
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
                      Recensisci
                    </Card.Header>
                    <Card.Body>
                      <Form>
                      <Row>
                          <Col md>
                          <Form.Group as={Col} controlId="formGridGenere">
                              <Form.Label as="h5">Chi sei?*</Form.Label>
                              <Form.Select 
                              defaultValue="Scegli" 
                              name="subscription_type" 
                              required
                              onChange={this.handleInputChange} >
                                <option>Studente</option>
                                <option>Laureato</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group controlId="formGridAge">
                              <Form.Label as="h5">Quanti anni hai?*</Form.Label>
                              <Form.Control 
                              name="subscription_type" 
                              required
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          <br/>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridGenere">
                              <Form.Label as="h5">Genere?*</Form.Label>
                              <Form.Select defaultValue="Scegli"
                              name="subscription_type" 
                              required
                              onChange={this.handleInputChange}
                              >
                                <option>Femmina</option>
                                <option>Maschio</option>
                                <option>Altro</option>
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
                                  <Form.Label as="h5">Comune di provenienza:*</Form.Label>
                                  <Form.Control 
                                  name="subscription_type" 
                                  required
                                  onChange={this.handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                              <br/>
                              <Col md="4">
                                <Form.Group controlId="home_province">
                                  <Form.Label as="h5">Provincia di provenienza:*</Form.Label>
                                  <Form.Select 
                                  name="subscription_type" 
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
                                  <Form.Label as="h5">Regione di provenienza:*</Form.Label>
                                  <Form.Select 
                                  name="subscription_type" 
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
                                    Sei fuorisede?*
                                  </Form.Label>
                                </Form.Group>
                                  {["radio"].map((type) => (
                                    <div
                                      key={`inline-${type}`}
                                      className="mb-3"
                                    >
                                      <Form.Check
                                        inline
                                        label="Sì"
                                        type={type}
                                        id={`inline-${type}-1`}
                                        name="subscription_type" 
                                        required
                                        onChange={this.handleInputChange}
                                      />
                                      <Form.Check
                                        inline
                                        label="No"
                                        name="subscription_type" 
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
                                  <Form.Label as="h5">In che città studi / hai studiato?</Form.Label>
                                  <Form.Control 
                                  name="subscription_type" 
                                  onChange={this.handleInputChange}
                                  />
                                </Form.Group>
                              </Col>
                              <br/>
                              <Col md>
                                <Form.Group controlId="study_province">
                                  <Form.Label as="h5">In che provincia studi / hai studiato?</Form.Label>
                                  <Form.Select 
                                  name="subscription_type" 
                                  onChange={this.handleInputChange}
                                  aria-label="Default select example">
                                  <Province></Province></Form.Select>
                                </Form.Group>
                              </Col>
                              <br/>
                              <Col md>
                                <Form.Group as={Col} controlId="study_region">
                                  <Form.Label as="h5">In che regione studi / hai studiato?</Form.Label>
                                  <Form.Select 
                                  name="subscription_type" 
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
                                Che tipo di studi stai facendo/ hai fatto?*
                              </Form.Label>
                            </Form.Group>

                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
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
                                Che università frequenti?*
                              </Form.Label>
                              <Form.Select 
                              name="study_type"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                              <Universities></Universities></Form.Select>
                            </Form.Group>
                          </Col>
                          </Row>
                        <br></br>
                        <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridother_uni">
                              <Form.Label as="h5">
                                Tipo di università?*
                              </Form.Label>
                              <Form.Label>
                                (in situazioni non di emergenza)*
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    label="IN PRESENZA"
                                    name="uni_type"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
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
                                Di quale dipartimento fai parte?*
                              </Form.Label>
                              <Form.Control
                              name="uni_type"
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
                                Che corso di laurea frequenti?*
                              </Form.Label>
                              <Form.Control 
                              name="uni_type"
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
                            Quali sono le discipline principali del tuo corso?*
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Elenca le discipline principali separate da un virgola 
      (ES: scienze ambientali,matematica,biotecnologie agricole,robotica,game developing,sociologia.....)"
                            name="uni_type"
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
                                In che anno ti sei iscritto?*
                              </Form.Label>
                              <Form.Control
                              name="uni_type"
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
                              In che anno prevedi di terminare l’università/ hai terminato?*
                            </Form.Label>
                            <Form.Control 
                            name="uni_type"
                            type="number"
                            min="1990"
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
                                Tipologia d'iscrizione:*
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    label="PART TIME"
                                    name="enrolment_type"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
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
                                Che anno frequenti?*
                              </Form.Label>
                              <Form.Control 
                              name="enrolment_type"
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
                              <Form.Label as="h5">Che media hai? ( Solo se sei STUDENTE)</Form.Label>
                              <Form.Control
                                as="textarea"
                                type="number"
                                placeholder="Metti 0 se non hai ancora una media, Scrivi 31, per mettere 30 E LODE"
                                name="enrolment_type"
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
                                Hai degli esami indietro? ( Solo se sei STUDENTE)
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    label="SI"
                                    name="exams_not_done"
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
                                    label="NO"
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
                              <Form.Label as="h5">Quanti sono?(Solo se hai risposto hai degli esami indietro)</Form.Label>
                              <Form.Control 
                              name="exams_not_done"
                              onChange={this.handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                        <br></br>
                        <Col >
                        <Form.Group
                          as={Col}
                          controlId="formGriddifficult_aspect"
                        >
                          <Form.Label as="h5">
                            Qual'è/ è stato l'ASPETTO del tuo corso che ti ha messo più
                            in difficoltà?*
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Es. i professori, l'ambiente, le materie, l organizzazione della didattica..."
                            name="exams_not_done"
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
                            più FACILI?*
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Scrivi NO se non hai ancora dato nessun esame"
                            name="exams_not_done"
                                    required
                                    onChange={this.handleInputChange}
                         />
                        </Form.Group>
                        </Col>
                        <Col md="6">
                        <Form.Group as={Col} controlId="formGridhard_exams">
                          <Form.Label as="h5">
                            Quali sono stati  gli ESAMI che hai trovato
                            più DIFFICILI?*
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Scrivi NO se non hai ancora dato nessun esame"
                            name="exams_not_done"
                            required
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
                                nuovo questo corso di laurea?*
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    label="SI"
                                    name="redo_choice"
                                    required
                                    onChange={this.handleInputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                  <Form.Check
                                    inline
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
                              Cosa ti aspettavi da questo corso di studi?*
                            </Form.Label>
                            <Form.Control 
                            name="redo_choice"
                            required
                            as="textarea"
                            onChange={this.handleInputChange}
                            />
                          </Form.Group>
                          </Col>
                        </Row>
                        <br></br>
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
                                tua carriera univeristaria?*
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
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
                              name="abroad_experience"
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
                              name="abroad_experience"
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
                              name="abroad_experience"                            
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
                                Hai mai cambiato corso durante questa laurea?*
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
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
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="select_highschool"
                            >
                              <Form.Label as="h5">
                                Che scuola hai fatto alle superiori?*
                              </Form.Label>
                              <Form.Select 
                              name="choice_related_studies"
                              required
                              onChange={this.handleInputChange}
                              aria-label="Default select example">
                                <School></School>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <br/>
                          <Col md>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridmain_subject"
                            >
                              <Form.Label as="h5">
                                Quali erano le materie principali della tua
                                scuola?*
                              </Form.Label>
                              <Form.Control 
                              name="choice_related_studies"
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
                                Qual era la tua/ le tue materie preferita?* 
                              </Form.Label>
                              <Form.Control 
                              name="choice_related_studies"
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
                                Che voto hai preso alla maturita?*
                              </Form.Label>
                              <Form.Control 
                              name="choice_related_studies"
                              required
                              min="60"
                              type="number"
                              onChange={this.handleInputChange}
                              placeholder="Metti 111 se sei uscito con 110 E LODE" />
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
                                studi delle superiori?*
                              </Form.Label>
                            </Form.Group>
                              {["radio"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
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
                              caratteristiche riguardanti la tua università:{" "}
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
                                Qualità dell'offerta formativa:*
                              </Form.Label>
                              <Form.Select 
                              name="choice_related_studies"
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
                                Qualità dell’insegnamento dei professori:*
                              </Form.Label>
                              <Form.Select 
                              name="choice_related_studies"
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
                                Difficoltà degli esami:*
                              </Form.Label>
                              <Form.Select 
                              name="choice_related_studies"
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
                                Difficoltà delle materie:*
                              </Form.Label>
                              <Form.Select 
                              name="choice_related_studies"
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
                                Qualità degli spazi di ateneo:*
                              </Form.Label>
                              <Form.Select 
                              name="choice_related_studies"
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
                                Qualità del rapporto con i colleghi:*
                              </Form.Label>
                              <Form.Select 
                              name="choice_related_studies"
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
                              o di laboratorio?*
                            </Form.Label>
                            
                            <Form.Select 
                              name="choice_related_studies"
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
                                  Quali sono i tuoi hobby?*
                                </Form.Label>
                                <Form.Control
                                name="choice_related_studies"
                                required
                                onChange={this.handleInputChange}
                                  as="textarea"
                                  placeholder="(separa i vari hobby con una virgola"
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
                                  Qual è il lavoro dei tuoi sogni?*
                                </Form.Label>
                                <Form.Control
                                name="choice_related_studies"
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
                                  Lascia una recensione sul tuo corso laurea:*
                                </Form.Label>
                                <Form.Control
                                name="choice_related_studies"
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
                          <Form.Label as="h5">Voto recensione*</Form.Label>
                          <Form.Select 
                          name="choice_related_studies"
                          required
                          onChange={this.handleInputChange}
                          aria-label="Default select example">
                            <option>Stars</option>
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                          </Form.Select>
                        </Col>
                        </Row>
                        <br/>
                        <Button variant="primary" type="submit">
                          Invia
                        </Button>
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
export default Recensisci;
