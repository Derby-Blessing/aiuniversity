import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import PredictResult from "./object/PredictResult";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Alert, Col, Modal, Row,Popover,OverlayTrigger,   FormControl, Card, Container } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBook, faInfoCircle, faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const mustFieldColor = { color: "red" };
function ShowRegionInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Link onClick={handleShow}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informazioni sulla regione</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Seleziona la regione in cui hai frequentato la scuola superiore</p>
        <p style={mustFieldColor}>*Il campo è obbligatorio</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function ShowProvinceInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Link onClick={handleShow}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informazioni sulla provincia</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Seleziona la provincia in cui hai frequentato la scuola superiore</p>
        <p style={mustFieldColor}>*Il campo è obbligatorio</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function ShowSchoolInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Link onClick={handleShow}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informazioni sulla scuola superiore</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Seleziona la scuola superiore che hai frequentato, se non è presente seleziona altro</p>
        <p style={mustFieldColor}>*Il campo è obbligatorio</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ShowSubjectInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Link onClick={handleShow}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informazioni sulle materie principali</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Inserisci la materie principali che hai frequentato alle superiori</p>
        <p><b>Ricordati di separare ciscuna materia dalle altre usando la virgola</b> <i>Es. (italiano, matematica, latino) </i> </p>
        <p style={mustFieldColor}>*Il campo è obbligatorio</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function ShowPreferedSubjectInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Link onClick={handleShow}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informazioni sulle materie preferite</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Inserisci le  materie che ti piace studiare di più</p>
        <p><b>Ricordati di separare ciscuna materia dalle altre usando la virgola</b> <i>Es. (italiano, matematica, latino) </i> </p>
        <p style={mustFieldColor}>*Il campo è obbligatorio</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function ShowHobbyInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Link onClick={handleShow}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informazioni sugli hobby</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Inserisci i tuoi hobby, e le cose che ti piace fare nel tempo libero</p>
        <p><b>Ricordati di separare ciscuna hobby dagli altri usando la virgola</b> <i>Es. (sport, andare a teatro, viaggiare) </i> </p>
        <p style={mustFieldColor}>*Il campo è obbligatorio</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function ShowDreamJobInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Link onClick={handleShow}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informazioni sul lavoro dei tuoi sogni</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Inserisci il/i lavoro/i che vorresti fare una volta conclusa l'università.</p>
        <p><b>Ricordati di separare ciscuna lavoro dagli altri usando la virgola</b> <i>Es. (avvocato, magistrato, politico) </i> </p>
        <p style={mustFieldColor}>*Il campo è obbligatorio</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function ShowAspectationsInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Link onClick={handleShow}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informazioni sulle aspettative universitarie</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Raccontaci cosa ti aspetti dal mondo dell'università e come pensi che questa sia utile per il tuo futuro. </p>
        <p><b>Aiutaci a capire cosa vorresti dal tuo prossimo futuro!</b> </p>
        <p style={mustFieldColor}>*Il campo è obbligatorio</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function ShowDecisionInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Link onClick={handleShow}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informazioni sulla decisione </Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Raccontaci cosa o chi ti ha spinto a tuffarti nel mondo dell'università, soffermandoti in particolare sul motivo di questa scelta. </p>
        <p><b>Aiutaci a capire cosa vorresti dal tuo prossimo futuro!</b> </p>
        <p style={mustFieldColor}>*Il campo è obbligatorio</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Province() {
  return (
    <>

        <option value="">Seleziona Provincia</option>
        <option value="ag">Agrigento</option>
        <option value="al">Alessandria</option>
        <option value="an">Ancona</option>
        <option value="ao">Aosta</option>
        <option value="ar">Arezzo</option>
        <option value="ap">Ascoli Piceno</option>
        <option value="at">Asti</option>
        <option value="av">Avellino</option>
        <option value="ba">Bari</option>
        <option value="bt">Barletta-Andria-Trani</option>
        <option value="bl">Belluno</option>
        <option value="bn">Benevento</option>
        <option value="bg">Bergamo</option>
        <option value="bi">Biella</option>
        <option value="bo">Bologna</option>
        <option value="bz">Bolzano</option>
        <option value="bs">Brescia</option>
        <option value="br">Brindisi</option>
        <option value="ca">Cagliari</option>
        <option value="cl">Caltanissetta</option>
        <option value="cb">Campobasso</option>
        <option value="ci">Carbonia-iglesias</option>
        <option value="ce">Caserta</option>
        <option value="ct">Catania</option>
        <option value="cz">Catanzaro</option>
        <option value="ch">Chieti</option>
        <option value="co">Como</option>
        <option value="cs">Cosenza</option>
        <option value="cr">Cremona</option>
        <option value="kr">Crotone</option>
        <option value="cn">Cuneo</option>
        <option value="en">Enna</option>
        <option value="fm">Fermo</option>
        <option value="fe">Ferrara</option>
        <option value="fi">Firenze</option>
        <option value="fg">Foggia</option>
        <option value="fc">Forli-Cesena</option>
        <option value="fr">Frosinone</option>
        <option value="ge">Genova</option>
        <option value="go">Gorizia</option>
        <option value="gr">Grosseto</option>
        <option value="im">Imperia</option>
        <option value="is">Isernia</option>
        <option value="sp">La spezia</option>
        <option value="aq">L'aquila</option>
        <option value="lt">Latina</option>
        <option value="le">Lecce</option>
        <option value="lc">Lecco</option>
        <option value="li">Livorno</option>
        <option value="lo">Lodi</option>
        <option value="lu">Lucca</option>
        <option value="mc">Macerata</option>
        <option value="mn">Mantova</option>
        <option value="ms">Massa-Carrara</option>
        <option value="mt">Matera</option>
        <option value="vs">Medio Campidano</option>
        <option value="me">Messina</option>
        <option value="mi">Milano</option>
        <option value="mo">Modena</option>
        <option value="mb">Monza e della Brianza</option>
        <option value="na">Napoli</option>
        <option value="no">Novara</option>
        <option value="nu">Nuoro</option>
        <option value="og">Ogliastra</option>
        <option value="ot">Olbia-Tempio</option>
        <option value="or">Oristano</option>
        <option value="pd">Padova</option>
        <option value="pa">Palermo</option>
        <option value="pr">Parma</option>
        <option value="pv">Pavia</option>
        <option value="pg">Perugia</option>
        <option value="pu">Pesaro e Urbino</option>
        <option value="pe">Pescara</option>
        <option value="pc">Piacenza</option>
        <option value="pi">Pisa</option>
        <option value="pt">Pistoia</option>
        <option value="pn">Pordenone</option>
        <option value="pz">Potenza</option>
        <option value="po">Prato</option>
        <option value="rg">Ragusa</option>
        <option value="ra">Ravenna</option>
        <option value="rc">Reggio di Calabria</option>
        <option value="re">Reggio nell'Emilia</option>
        <option value="ri">Rieti</option>
        <option value="rn">Rimini</option>
        <option value="rm">Roma</option>
        <option value="ro">Rovigo</option>
        <option value="sa">Salerno</option>
        <option value="ss">Sassari</option>
        <option value="sv">Savona</option>
        <option value="si">Siena</option>
        <option value="sr">Siracusa</option>
        <option value="so">Sondrio</option>
        <option value="ta">Taranto</option>
        <option value="te">Teramo</option>
        <option value="tr">Terni</option>
        <option value="to">Torino</option>
        <option value="tp">Trapani</option>
        <option value="tn">Trento</option>
        <option value="tv">Treviso</option>
        <option value="ts">Trieste</option>
        <option value="ud">Udine</option>
        <option value="va">Varese</option>
        <option value="ve">Venezia</option>
        <option value="vb">Verbano-Cusio-Ossola</option>
        <option value="vc">Vercelli</option>
        <option value="vr">Verona</option>
        <option value="vv">Vibo valentia</option>
        <option value="vi">Vicenza</option>
        <option value="vt">Viterbo</option>
        <option value="estero">Altro</option>
    </>
  );
}

function Regions() {
  return (
    <>
        <option  value="">Seleziona Regione</option>
        <option value="abruzzo">abruzzo</option>
        <option value="basilicata">basilicata</option>
        <option value="calabria">calabria</option>
        <option value="campania">campania</option>
        <option value="emilia romagna">emilia romagna</option>
        <option value="friuli venezia giulia">friuli venezia giulia</option>
        <option value="lazio">lazio</option>
        <option value="liguria">liguria</option>
        <option value="lombardia">lombardia</option>
        <option value="marche">marche</option>
        <option value="molise">molise</option>
        <option value="piemonte">piemonte</option>
        <option value="puglia">puglia</option>
        <option value="sardegna">sardegna</option>
        <option value="sicilia">sicilia</option>
        <option value="toscana">toscana</option>
        <option value="trentino alto adige">trentino alto adige</option>
        <option value="umbria">umbria</option>
        <option value="valle d aosta">valle d'aosta</option>
        <option value="veneto">veneto</option>
    </>
  );
}

function School() {
  return (
    <>
      
          <option  value="">Seleziona scuola superiore</option>
          <option value="Liceo Linguistico">
            Liceo linguistico
          </option>
          <option value="Liceo Scientifico">
            Liceo scientifico
          </option>
          <option value="Liceo Classico">
            Liceo classico
          </option>
          <option value="Liceo Scienze Umane">
            Liceo scienze umane
          </option>
          <option value="Liceo Artistico">
            Liceo artistico
          </option>
          <option value="Liceo Musicale">
            Liceo musicale
          </option>
          <option value="Istituto tecnico economico">
            Istituto tecnico economico
          </option>
          <option value="Istituto tecnico alberghiero">
            Istituto tecnico alberghiero
          </option>
          <option value="Istituto tecnico geometri">
            Istituto tecnico per geometri
          </option>
          <option value="Istituto tecnico industriale">
            Istituto tecnico industriale
          </option>
          <option value="Istituto tecnico grafica e comunicazione">
            Istituto tecnico grafica e comunicazione
          </option>
          <option value="Istituto tecnico agrario">
            Istituto tecnico agrario
          </option>
          <option value="IPSIA">
            Istituto professionale per l’Industria e
            l’Artigianato
          </option>
          <option value="Istituto professionale agrario ">
            Istituto professionale agrario
          </option>
          <option value="Istituto professionale economico ">
            Istituto professionale economico
          </option>
          <option value="Istituto professionale alberghiero">
            Istituto professionale alberghiero
          </option>
          <option id="altro" value="altro">
            Altro
          </option>
       
    </>
  );
}

class Consigliami extends React.Component 
{
  constructor(props)
    {
      super(props)
      this.state={
        age:18, 
        gender:"",
        region:"",
        province: "",
        high_school: "",
        main_subject: "",
        prefered_subject: "",
        hobby: "",
        dream_work: "",
        uni_aspectations: "",
        uni_decision_choice: "",
        continuous_previous_study: "",
        isSubmit: false,
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
      localStorage.setItem('arriveByForm', true);
      localStorage.setItem('infoSubscription', null);
      event.preventDefault()
  }

  render() {
    const information=this.state.isSubmit
    const bg_color = { backgroundColor: "#1A237E" };
    const color = { color: "#1A237E" };

   
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
              <Row className="justify-content-md-center">
                <Col md="8">
                  <Card className="text-center">
                    <Card.Header as="h1" style={color}>
                      Consigliami
                    </Card.Header>
                    <Card.Body>
                      <br/>
                      <Form onSubmit={this.handleSubmit}>
                      <Row>
                          <Col md>
                            <Form.Group controlId="formGridMaterie">
                              <Form.Label>
                                <b>Quanti anni hai?*</b>
                              </Form.Label>
                              <Form.Control  
                              type="number"
                              min="18"
                              value={this.state.age}
                              name="age" 
                              required 
                              onChange={this.handleInputChange} 
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                      <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridPrevStudies">
                              <Form.Label>
                                <b>Qual è il tuo sesso?*</b>
                              </Form.Label>
                                      {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                      <Form.Check 
                                        inline
                                        type={type}
                                        value='m'
                                        label='Maschio'
                                        name="gender"
                                        onChange={this.handleInputChange} 
                                      />
                                      <Form.Check 
                                        inline
                                        type={type}
                                        value='f'
                                        label='Femmina'
                                        name="gender"
                                        onChange={this.handleInputChange} 
                                      />
                                      <Form.Check 
                                        inline
                                        type={type}
                                        value='altro'
                                        label='Altro'
                                        name="gender"
                                        onChange={this.handleInputChange} 
                                      />
                                    </div>
                                  ))}
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Card.Title style={color}><h4><FontAwesomeIcon icon={faMapSigns}></FontAwesomeIcon>Informazioni geografiche</h4></Card.Title>
                      <br/>
                      <Row>
                          <Col md="6">
                            <Form.Group controlId="formGridMaterie">
                              <Form.Label>
                                <b>In che regione abiti?*</b><ShowRegionInfo ></ShowRegionInfo >
                              </Form.Label>
                              <Form.Select  
                              name="region"  
                              required
                              onChange={this.handleInputChange} 
                              >
                              <Regions></Regions>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <br/>
                          <Col md="6">
                            <Form.Group controlId="formGridMaterie">
                              <Form.Label>
                                <b>In che provincia abiti?* </b><ShowProvinceInfo ></ShowProvinceInfo >
                              </Form.Label>
                              <Form.Select 
                              name="province" 
                              required 
                              onChange={this.handleInputChange} 
                              >
                              <Province></Province>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                      <Row>
                          <Col md>
                          <Card.Title style={color}><h4><FontAwesomeIcon icon={faBook}></FontAwesomeIcon>Informazioni sugli studi</h4></Card.Title>
                           <br/>
                            <Form.Group controlId="formGridMaterie">
                              <Form.Label>
                                <b>Che scuola hai fatto alle superiori?*</b><ShowSchoolInfo ></ShowSchoolInfo >
                              </Form.Label>
                              <Form.Select 
                              name="high_school" 
                              required 
                              onChange={this.handleInputChange} 
                              >
                              <School></School>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                      <Row>
                          <Col md>
                            <Form.Group controlId="formGridMaterie">
                              <Form.Label>
                                <b>Che materie hai studiato alle scuole superiori?*</b><ShowSubjectInfo></ShowSubjectInfo>
                              </Form.Label>
                              <Form.Control  
                              placeholder="Es. Scienze, fisica, chimica"
                              as="textarea" 
                              name="main_subject" 
                              required 
                              onChange={this.handleInputChange} 
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group controlId="formGridMaterie">
                              <Form.Label>
                                <b>Quali sono le tue materie preferite?*</b><ShowPreferedSubjectInfo></ShowPreferedSubjectInfo>
                              </Form.Label>
                              <Form.Control 
                              placeholder="Es. Italiano, scienze, geografia"
                              as="textarea" 
                              name="prefered_subject" 
                              required  
                              onChange={this.handleInputChange} 
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group controlId="formGridHobby">
                              <Form.Label><b>Quali sono i tuoi hobby?*</b></Form.Label><ShowHobbyInfo></ShowHobbyInfo>
                              <Form.Control 
                              required  
                              placeholder="Es. Videogiochi, Viaggi, giocare a baseball"
                              name="hobby"
                              as="textarea" 
                              onChange={this.handleInputChange} 
                              />
                            </Form.Group>
                          </Col>
                          <br/>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridDreamJob">
                              <Form.Label>
                                <b>Qual è/sono il/i lavoro/i dei tuoi sogni?*</b><ShowDreamJobInfo></ShowDreamJobInfo>
                              </Form.Label>
                              <Form.Control 
                              placeholder="Es. Programmatore, informatico, Youtuber"
                              required  
                              as="textarea" 
                              name="dream_work"
                              onChange={this.handleInputChange} 
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridExpectations">
                              <Form.Label>
                                <b>Quali sono le tue aspettative sull'università?*</b> <ShowAspectationsInfo></ShowAspectationsInfo>
                              </Form.Label>
                              <Form.Control 
                              as="textarea" 
                              required  
                              name="uni_aspectations"
                              onChange={this.handleInputChange} 
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridMotives">
                              <Form.Label>
                                <b>Come mai vuoi intraprendere questa scelta?*</b> <ShowDecisionInfo></ShowDecisionInfo>
                              </Form.Label>
                              <Form.Control 
                              as="textarea" 
                              required  
                              name="uni_decision_choice"
                              onChange={this.handleInputChange} 
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <br/>
                        <Row>
                          <Col md>
                            <Form.Group as={Col} controlId="formGridPrevStudies">
                              <Form.Label>
                                <b>Ti piacerebbe continuare con i tuoi studi
                                precedenti?*</b>
                              </Form.Label>
                                      {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                      <Form.Check 
                                        inline
                                        type={type}
                                        value='si'
                                        label='si'
                                        name="continuous_previous_study"
                                        onChange={this.handleInputChange} 
                                      />
                                      <Form.Check 
                                        inline
                                        type={type}
                                        value='no'
                                        label='no'
                                        name="continuous_previous_study"
                                        onChange={this.handleInputChange} 
                                      />
                                    </div>
                                  ))}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                          Richiedi consiglio
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </center>}
      </>
    );
  }
}

export default Consigliami;
