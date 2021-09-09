import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Col, ListGroup, Row,FormControl,Card,Container,Button } from 'react-bootstrap';


/*export const  pippo= ()=> {
  return <h1 className='TrovaAteneo'>TROVA ATENEO</h1>;
}*/

class TrovaAteneo extends React.Component {
  render() {
    const bg_color ={backgroundColor: '#1A237E'};
    const color ={color: '#1A237E'};
    return (
      <>
      <center>
      <Container fluid style={bg_color}>
        <br></br>
      <Container>
      <Row>
      <Col md="auto">
      <Card className="text-center">
  <Card.Header  as="h1"  style={color}>Trova Ateneo</Card.Header>
  <Card.Body>
    <Form>
    <Row >
    <Col md>
  <Form.Group className="mb-3" controlId="formGridselect_uni">
  <Form.Label as="h5">Seleziona L'ateneo*</Form.Label>
  <Form.Select aria-label="Default select example">
    <option>Seleziona Università</option>
    <option  value="Università degli Studi di BARI ALDO MORO">Università degli Studi di BARI ALDO MORO</option>
    <option  value="Politecnico di BARI">Politecnico di BARI</option>
    <option  value="LUM Giuseppe Degennaro">LUM "Giuseppe Degennaro"</option>
    <option  value="Università degli Studi della BASILICATA">Università degli Studi della BASILICATA</option>
    <option  value="Università degli Studi di BERGAMO">Università degli Studi di BERGAMO</option>
    <option  value="Università degli Studi di BOLOGNA">Università degli Studi di BOLOGNA</option>
    <option  value="Libera Università di BOLZANO">Libera Università di BOLZANO</option>
    <option  value="Università degli Studi di BRESCIA">Università degli Studi di BRESCIA</option>
    <option  value="Università degli Studi di CAGLIARI">Università degli Studi di CAGLIARI</option>
    <option  value="Università della CALABRIA">Università della CALABRIA</option>
    <option  value="Università degli Studi di CAMERINO">Università degli Studi di CAMERINO</option>
    <option  value="Università degli Studi di CASSINO e del LAZIO MERIDIONALE">Università degli Studi di CASSINO e del LAZIO MERIDIONALE</option>
    <option  value="Università Carlo Cattaneo - LIUC">Università "Carlo Cattaneo" - LIUC</option>
    <option  value="Università degli Studi di CATANIA">Università degli Studi di CATANIA</option>
    <option  value="Università degli Studi Magna Graecia di CATANZARO">Università degli Studi "Magna Graecia" di CATANZARO</option>
    <option  value="Università degli Studi G d'Annunzio CHIETI-PESCARA">Università degli Studi "G. d'Annunzio" CHIETI-PESCARA</option>
    <option  value="Università degli Studi di SCIENZE GASTRONOMICHE">Università degli Studi di SCIENZE GASTRONOMICHE</option>
    <option  value="UKE - Università Kore di ENNA">UKE - Università Kore di ENNA</option>
    <option  value="Università degli Studi di FERRARA">Università degli Studi di FERRARA</option>
    <option  value="Università degli Studi di FIRENZE">Università degli Studi di FIRENZE</option>
    <option  value="Università degli Studi di FOGGIA">Università degli Studi di FOGGIA</option>
    <option  value="Università degli Studi di GENOVA">Università degli Studi di GENOVA</option>
    <option  value="Università degli Studi INSUBRIA Varese-Como">Università degli Studi INSUBRIA Varese-Como</option>
    <option  value="Università degli Studi de L'AQUILA">Università degli Studi de L'AQUILA</option>
    <option  value="Università degli Studi di MACERATA">Università degli Studi di MACERATA</option>
    <option  value="Università degli Studi di MESSINA">Università degli Studi di MESSINA</option>
    <option  value="Università degli Studi di MILANO">Università degli Studi di MILANO</option>
    <option  value="Università degli Studi di MILANO-BICOCCA">Università degli Studi di MILANO-BICOCCA</option>
    <option  value="Politecnico di MILANO">Politecnico di MILANO</option>
    <option  value="Università Commerciale Luigi Bocconi MILANO">Università Commerciale "Luigi Bocconi" MILANO</option>
    <option  value="Università Cattolica del Sacro Cuore">Università Cattolica del Sacro Cuore</option>
    <option  value="HUMANITAS University">HUMANITAS University</option>
    <option  value="Libera Università di lingue e comunicazione IULM-MI">Libera Università di lingue e comunicazione IULM-MI</option>
    <option  value="Libera Università Vita Salute San Raffaele MILANO">Libera Università "Vita Salute S.Raffaele" MILANO</option>
    <option  value="Università degli Studi di MODENA e REGGIO EMILIA">Università degli Studi di MODENA e REGGIO EMILIA</option>
    <option  value="Università degli Studi del MOLISE">Università degli Studi del MOLISE</option>
    <option  value="Università degli Studi di NAPOLI Federico II">Università degli Studi di NAPOLI "Federico II"</option>
    <option  value="Università degli Studi della Campania Luigi Vanvitelli">Università degli Studi della Campania "Luigi Vanvitelli"</option>
    <option  value="Università degli Studi di NAPOLI Parthenope">Università degli Studi di NAPOLI "Parthenope"</option>
    <option  value="Università degli Studi di NAPOLI L'Orientale">Università degli Studi di NAPOLI "L'Orientale"</option>
    <option  value="Università degli Studi Suor Orsola Benincasa - NAPOLI">Università degli Studi Suor Orsola Benincasa - NAPOLI</option>
    <option  value="Università degli Studi di PADOVA">Università degli Studi di PADOVA</option>
    <option  value="Università degli Studi di PALERMO">Università degli Studi di PALERMO</option>
    <option  value="Università degli Studi di PARMA">Università degli Studi di PARMA</option>
    <option  value="Università degli Studi di PAVIA">Università degli Studi di PAVIA</option>
    <option  value="Università degli Studi di PERUGIA">Università degli Studi di PERUGIA</option>
    <option  value="Università per Stranieri di PERUGIA">Università per Stranieri di PERUGIA</option>
    <option  value="Università degli Studi del PIEMONTE ORIENTALE Amedeo Avogadro-Vercelli">Università degli Studi del PIEMONTE ORIENTALE "Amedeo Avogadro"-Vercelli</option>
    <option  value="Università di PISA">Università di PISA</option>
    <option  value="Università Politecnica delle MARCHE">Università Politecnica delle MARCHE</option>
    <option  value="Università degli Studi Mediterranea di REGGIO CALABRIA">Università degli Studi "Mediterranea" di REGGIO CALABRIA</option>
    <option  value="Università per Stranieri Dante Alighieri di REGGIO CALABRIA">Università per Stranieri "Dante Alighieri" di REGGIO CALABRIA</option>
    <option  value="Università degli Studi EUROPEA di ROMA">Università degli Studi EUROPEA di ROMA</option>
    <option  value="Università degli Studi di ROMA Foro Italico">Università degli Studi di ROMA "Foro Italico"</option>
    <option  value="Università degli Studi di ROMA La Sapienza">Università degli Studi di ROMA "La Sapienza"</option>
    <option  value="Università degli Studi di ROMA Tor Vergata">Università degli Studi di ROMA "Tor Vergata"</option>
    <option  value="Università degli Studi ROMA TRE">Università degli Studi ROMA TRE</option>
    <option  value="Università Campus Bio-Medico di ROMA">Università "Campus Bio-Medico" di ROMA</option>
    <option  value="Luiss Libera Università internazionale degli studi sociali Guido Carli">Luiss Libera Università internazionale degli studi sociali Guido Carli</option>
    <option  value="LINK CAMPUS University">LINK CAMPUS University</option>
    <option  value="Università degli Studi Internazionali di ROMA (UNINT)">Università degli Studi Internazionali di ROMA (UNINT)</option>
    <option  value="UNICAMILLUS - Saint Camillus International University of Health Sciences">UNICAMILLUS - Saint Camillus International University of Health Sciences</option>
    <option  value="Libera Università degli Studi Maria SS Assunta- LUMSA">Libera Università degli Studi "Maria SS.Assunta" - LUMSA</option>
    <option  value="Università del SALENTO">Università del SALENTO</option>
    <option  value="Università degli Studi di SALERNO">Università degli Studi di SALERNO</option>
    <option  value="Università degli Studi del SANNIO di BENEVENTO">Università degli Studi del SANNIO di BENEVENTO</option>
    <option  value="Università degli Studi di SASSARI">Università degli Studi di SASSARI</option>
    <option  value="Università degli Studi di SIENA">Università degli Studi di SIENA</option>
    <option  value="Università per Stranieri di SIENA">Università per Stranieri di SIENA</option>
    <option  value="Università Telematica LEONARDO da VINCI">Università Telematica "LEONARDO da VINCI"</option>
    <option  value="Università Telematica E-CAMPUS">Università Telematica "E-CAMPUS"</option>
    <option  value="Università Telematica GIUSTINO FORTUNATO">Università Telematica "GIUSTINO FORTUNATO"</option>
    <option  value="Università degli Studi Guglielmo Marconi - Telematica">Università degli Studi "Guglielmo Marconi" - Telematica</option>
    <option  value="Università Telematica San Raffaele Rom">Università Telematica San Raffaele Roma</option>
    <option  value="Università Telematica Internazionale UNINETTUNO">Università Telematica Internazionale UNINETTUNO</option>
    <option  value="Università Telematica degli Studi IUL">Università Telematica degli Studi IUL</option>
    <option  value="Università Telematica PEGASO">Università Telematica PEGASO</option>
    <option value="Università Telematica UNITELMA SAPIENZA">Università Telematica UNITELMA SAPIENZA</option>
    <option value="UNICUSANO Università degli Studi Niccolò Cusano -Telematica Roma">UNICUSANO Università degli Studi Niccolò Cusano -Telematica Roma</option>
    <option value="Università Telematica Universitas MERCATORUM">Università Telematica "Universitas MERCATORUM"</option>
    <option value="Università degli Studi di TERAMO">Università degli Studi di TERAMO</option>
    <option value="Università degli Studi di TORINO">Università degli Studi di TORINO</option>
    <option value="Politecnico di TORINO">Politecnico di TORINO</option>
    <option value="Università degli Studi di TRENTO">Università degli Studi di TRENTO</option>
    <option value="Università degli Studi di TRIESTE">Università degli Studi di TRIESTE</option>
    <option value="Università degli Studi della TUSCIA">Università degli Studi della TUSCIA</option>
    <option value="Università degli Studi di UDINE">Università degli Studi di UDINE</option>
    <option value="Università degli Studi di Urbino Carlo Bo">Università degli Studi di Urbino Carlo Bo</option>
    <option value="Università della VALLE D'AOSTA">Università della VALLE D'AOSTA</option>
    <option value="Università Ca' Foscari VENEZIA">Università "Ca' Foscari" VENEZIA</option>
    <option value="Università IUAV di VENEZIA">Università IUAV di VENEZIA</option>
    <option value="Università degli Studi di VERONA">Università degli Studi di VERONA</option>
    <option id="altro" value="altro" >Altro</option>
    </Form.Select>
    </Form.Group>
          </Col>
          </Row>
    <Button variant="primary" type="submit">
      Cerca
    </Button>
    <br></br>
    <br></br>
    <Col  md="auto">
  <Card.Header  as="h4"  style={color}>Informazione dell'ateneo selezionato: </Card.Header>
  </Col>

  <Row>
      <Col md>
  <Form.Group className="mb-3" controlId="formGridtriennial_end_year">
  <Form.Label as="h5">Regione:</Form.Label>
  <Form.Control />
        </Form.Group>
      </Col>
      <Col md>
  <Form.Group className="mb-3" controlId="formGridtriennial_end_year">
  <Form.Label as="h5">Provincia:</Form.Label>
  <Form.Control />
        </Form.Group>
      </Col>
      </Row>
      <Row>
      <Col md>
  <Form.Group className="mb-3" controlId="formGridtriennial_end_year">
  <Form.Label as="h5">Numero Studenti Sottoscritti:</Form.Label>
  <Form.Control />
        </Form.Group>
      </Col>
      <Col md>
  <Form.Group className="mb-3" controlId="formGridreviews">
  <Form.Label as="h5">Recensioni:</Form.Label>
  <Form.Control />
        </Form.Group>
      </Col>
      </Row>
      <Row>
      <Col md>
      <Card>
  <Card.Header  as="h5"  style={color}>Corsi: </Card.Header>
  <ListGroup variant="flush">
  <Card.Body>
    <ListGroup.Item><Card.Link href="#">Es. Economia</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card.Link</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card Link</Card.Link></ListGroup.Item>
  </Card.Body>
  </ListGroup>
 </Card>
      </Col>
      </Row>
      <Row>
      <Col md>
      <Card>
  <Card.Header  as="h5"  style={color}>Recensioni Ateneo:</Card.Header>
  <ListGroup variant="flush">
  <Card.Body>
    <ListGroup.Item><Card.Link href="#">Recensione</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card.Link</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="#">Card Link</Card.Link></ListGroup.Item>
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


export default TrovaAteneo



