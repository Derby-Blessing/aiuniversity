import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Col,Alert,Row,FormControl,Card,Button } from 'react-bootstrap';
/*export default function Recensisci() {
  return <h1 className="Recensisci">Recensisci</h1>;
}*/

class Recensisci extends React.Component {
  render() {
    return (
      <>
      <center>
  <Card className="text-center" style={{ width: '50rem' }}>
  <Card.Header as="h2">Recensisci</Card.Header>
  <Card.Body>
    <Form>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridAge">
      <Form.Label>Quanti anni hai?</Form.Label>
      <Form.Control />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridGenere">
      <Form.Label>Genere?</Form.Label>
      <Form.Select defaultValue="Scegli">
        <option>Femmina</option>
        <option>Maschio</option>
        <option>Altro</option>
      </Form.Select>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridGeografiche">
      <Form.Label>Informazioni geografiche</Form.Label>
      <Form.Control />
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridResidence">
      <Form.Label>Da dove vieni?</Form.Label>
      <Form.Control placeholder="luogo d'origine/residenza prima dell'università"/>
    </Form.Group>

  <Form.Group as={Col} controlId="home_province">
    <Form.Label>Provincia:</Form.Label>
    <Form.Select aria-label="Default select example">
            <option>Seleziona Provincia</option>
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
            </Form.Select>
          </Form.Group>
          </Row>

  <Row className="mb-3" >  
  <Form.Group as={Col} controlId="home_region">
  <Form.Label>Regione:</Form.Label>
  <Form.Select aria-label="Default select example">
      <option>Seleziona Regione</option>
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
      <option value="europa">paese europeo</option>
      <option value="extra EU">paese extra EU</option>
            </Form.Select>
          </Form.Group>
      
      <Form.Group as={Col} controlId="formGridFuorisede">
        <Form.Label>Sei fuorisede?</Form.Label>
      </Form.Group>
      <Form>
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="Sì"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="No"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form>
  </Row>

  <Row className="mb-3" >  
  <Form.Group as={Col} controlId="formGridStudy_town">
        <Form.Label>Dove studi?</Form.Label>
        <Form.Control placeholder="Comune"/>
      </Form.Group>                  
      
  <Form.Group as={Col} controlId="study_province">
  <Form.Label>Provincia:</Form.Label>
  <Form.Select aria-label="Default select example">
            <option>Seleziona Provincia</option>
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
    </Form.Select>
          </Form.Group>
    </Row>

  <Row className="mb-3" >  
  <Form.Group as={Col} controlId="study_region">
  <Form.Label>Regione:</Form.Label>
  <Form.Select aria-label="Default select example">
          
          <option>Seleziona Regione</option>
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
          </Form.Select>
          </Form.Group>

      <Form.Group as={Col} controlId="formGriddifficulties_transferring">
        <Form.Label>Hai trovato difficoltà nel trasferimento?</Form.Label>
      </Form.Group>
      <Form>
        
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="Sì"
          name="difficulties_transferring"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="No"
          name="difficulties_transferring"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form>
  </Row>


  <Form.Group className="mb-3" controlId="formGriddifficulties_list">
      <Form.Label>Quali sono state?</Form.Label>
      <Form.Control as="textarea" />
    </Form.Group>


    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridstudytype">
        <Form.Label>Che tipo di studi stai facendo?</Form.Label>
      </Form.Group>
      <Form>
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="Triennale"
          name="study_type"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="Magistrale_unico"
          name="study_type"
          type={type}
          id={`inline-${type}-2`}
        />
        <Form.Check
          inline
          label="Magistrale"
          name="study_type"
          type={type}
          id={`inline-${type}-2`}
        />
        <Form.Check
          inline
          label="Master"
          name="study_type"
          type={type}
          id={`inline-${type}-2`}
        />
        <Form.Check
          inline
          label="Dottorato"
          name="study_type"
          type={type}
          id={`inline-${type}-2`}
        />
        <Form.Check
          inline
          label="scuolaspecialistica"
          name="study_type"
          type={type}
          id={`inline-${type}-2`}
        />
        <Form.Check
          inline
          label="altro"
          name="study_type"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form>
  </Row>
      
  <Form.Group className="mb-3" controlId="select_uni">
  <Form.Label>Che università frequenti?</Form.Label>
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

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridother_uni">
        <Form.Label>Tipo di università?</Form.Label>
        <Form.Control type="text" placeholder="Seleziona Regionein situazioni non di emergenza"/>
      </Form.Group>
      <Form>
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="IN PRESENZA"
          name="uni_type"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="TELEMATICA"
          name="uni_type"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form>
  </Row>

  <Form.Group as={Col} controlId="formGriddepartment">
        <Form.Label>Di quale dipartimento fai parte</Form.Label>
        <Form.Control />
      </Form.Group>

  <Row className="mb-3">
      <Form.Group as={Col} controlId="formGriddegree_course">
        <Form.Label>Che corso di laurea frequenti?</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridsubject_area">
      <Form.Label>Quali sono le discipline principali del tuo corso?</Form.Label>
      <Form.Control as="textarea" placeholder="Elenca le discipline principali separate da un virgola 
      (ES: scienze ambientali,matematica,biotecnologie agricole,robotica,game developing,sociologia.....)"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridenrolment_year">
        <Form.Label>In che anno ti sei iscritto?</Form.Label>
        <Form.Control />
      </Form.Group>
    
      <Form.Group as={Col} controlId="formGridend_year">
        <Form.Label>In che anno prevedi di terminare l’università?</Form.Label>
        <Form.Control />
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridenrolment_type">
        <Form.Label>Tipologia d'iscrizione:</Form.Label>
        <Form.Control type="text" placeholder="Seleziona Regione in situazioni non di emergenza"/>
      </Form.Group>
      <Form>
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="PART TIME"
          name="enrolment_type"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="FULL TIME"
          name="enrolment_type"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form>
  </Row>
  
  <Form.Group as={Col} controlId="formGriddegree_year">
        <Form.Label>Che anno frequenti?</Form.Label>
        <Form.Control />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridaverage_grade">
        <Form.Label>Che media hai?</Form.Label>
        <Form.Control as="textarea" placeholder="Metti 0 se non hai ancora una media, Scrivi 31, per mettere 30 E LODE"/>
  </Form.Group>

  <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridexams_not_done">
        <Form.Label>Hai degli esami indietro?</Form.Label>
        <Form.Control type="text" placeholder="Seleziona Regionein situazioni non di emergenza"/>
      </Form.Group>
      <Form>
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="SI"
          name="exams_not_done"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="NO"
          name="exams_not_done"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form>
  </Row>
  
  <Form.Group as={Col} controlId="formGridnumb_exams_not_done">
        <Form.Label>Quanti sono?</Form.Label>
        <Form.Control />
  </Form.Group>

  <Form.Group as={Col} controlId="formGriddifficult_aspect">
        <Form.Label>Qual'è  l'ASPETTO del tuo corso che ti ha messo più in difficoltà?</Form.Label>
        <Form.Control as="textarea" placeholder="Es. i professori, l'ambiente, le materie, l organizzazione della didattica..."/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGrideasy_exams">
        <Form.Label>Quali sono stati, finora,  gli ESAMI che hai trovato più FACILI?</Form.Label>
        <Form.Control as="textarea" placeholder="Scrivi NO se non hai ancora dato nessun esame"/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridhard_exams">
        <Form.Label>Quali sono stati, finora, gli ESAMI che hai trovato più DIFFICILI?</Form.Label>
        <Form.Control as="textarea" placeholder="Scrivi NO se non hai ancora dato nessun esame"/>
  </Form.Group>

  <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridredo_choice">
        <Form.Label>Se potessi tornare indietro, sceglieresti di nuovo questo corso di laurea?</Form.Label>
      </Form.Group>
      <Form>
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="SI"
          name="redo_choice"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="NO"
          name="redo_choice"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form>
  </Row>


  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridreason_redo_choice">
        <Form.Label>Perchè?</Form.Label>
        <Form.Control/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGriddecision_choice">
        <Form.Label>Cosa/Chi ti ha spinto a fare questa scelta?</Form.Label>
        <Form.Control/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridexpectations">
        <Form.Label>Cosa ti aspettavi da questo corso di studi?</Form.Label>
        <Form.Control />
  </Form.Group>
  </Row>

  <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridexpectations_met">
        <Form.Label>Finora, sono state soddisfatte le tue aspettative? </Form.Label>
      </Form.Group>
      <Form>
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="SI"
          name="expectations_met"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="NO"
          name="expectations_met"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form>
  </Row>
      
  <Form.Group as={Col} controlId="formGridexpectations_no">
        <Form.Label>Come mai?</Form.Label>
        <Form.Control />
  </Form.Group>

  <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridadvice">
        <Form.Label>Consiglieresti questa laurea?</Form.Label>
      </Form.Group>
      <Form>
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="SI"
          name="advice"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="NO"
          name="advice"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
    ))}
  </Form>
  </Row>

  <Form.Group as={Col} controlId="formGridadvice_why">
        <Form.Label>Perchè?</Form.Label>
        <Form.Control />
  </Form.Group> 

  <Form.Group as={Col} controlId="formGridadvice_who">
        <Form.Label>A chi la consiglieresti??</Form.Label>
        <Form.Control />
  </Form.Group>
                

  <Form.Group className="mb-3" controlId="prev_change_uni">
  <Form.Label>Qual'era la tua precedente UNIVERSITA'?</Form.Label>
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

        

  <Form.Group className="mb-3" controlId="select_triennial">
  <Form.Label>Che università hai frequentato alla triennale?</Form.Label>
  <Form.Select aria-label="Default select example">
        <option>Seleziona Triennale</option>
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

  <Form.Group className="mb-3" controlId="select_highschool">
  <Form.Label>Che scuola hai fatto alle superiori?</Form.Label>
  <Form.Select aria-label="Default select example">
    <option>Seleziona Scuola Superiore</option>
    <option value="Liceo Linguistico"> Liceo linguistico</option>
    <option value="Liceo Scientifico">Liceo scientifico </option>
    <option value="Liceo Classico">Liceo classico</option>
    <option value="Liceo Scienze Umane">Liceo scienze umane</option>
    <option value="Liceo Artistico">Liceo artistico</option>
    <option value="Liceo Musicale">Liceo musicale</option>
    <option value="Istituto tecnico economico">Istituto tecnico economico</option>
    <option value="Istituto tecnico alberghiero">Istituto tecnico alberghiero</option>
    <option value="Istituto tecnico geometri">Istituto tecnico per geometri</option>
    <option  value="Istituto tecnico industriale">Istituto tecnico industriale</option>
    <option  value="Istituto tecnico grafica e comunicazione">Istituto tecnico grafica e comunicazione</option>
    <option value="Istituto tecnico agrario">Istituto tecnico agrario</option>
    <option value="IPSIA">Istituto professionale per l’Industria e l’Artigianato</option>
    <option value="Istituto professionale agrario">Istituto professionale agrario</option>
    <option value="Istituto professionale economico">Istituto professionale economico</option>
    <option value="Istituto professionale alberghiero">Istituto professionale alberghiero</option>
    <option id="altro" value="altro" >Altro</option>
                          </Form.Select>
                          </Form.Group>
                          
                            

  <Form.Label>Voto recensione</Form.Label>
  <Form.Control />
  <Form.Select aria-label="Default select example">
      <option>Stars</option>
      <option  value="1">⭐</option>
      <option  value="2">⭐⭐</option>
      <option  value="3">⭐⭐⭐</option>
      <option  value="4">⭐⭐⭐⭐</option>
      <option  value="5">⭐⭐⭐⭐⭐</option>
  </Form.Select>

  <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Card.Body>
  </Card>
  </center>
</>
   );  
  }
                     
}
export default Recensisci
