import React from "react";
import ReactDOM from "react-dom";

/*export default function Recensisci() {
  return <h1 className="Recensisci">Recensisci</h1>;
}*/

class Recensisci extends React.Component {
  render() {
    return (
      <>

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
    </Row>

    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridGeografiche">
      <Form.Label>Informazioni geografiche</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridResidence">
      <Form.Label>Da dove vieni?</Form.Label>
      <Form.Control placeholder="luogo d'origine/residenza prima dell'università"/>
    </Form.Group>
    </Row>

 <Form.Group className="mb-3" controlId="home_province">
  <Form.Label>Provincia:</Form.Label>
  <Form.Control type="home_province" placeholder="Seleziona Provincia" />
  <Form.Select aria-label="Default select example">
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
    
                            <Form.Group className="mb-3" controlId="home_region">
                            <Form.Label>Regione:</Form.Label>
                            <Form.Control type="home_region" placeholder="Seleziona Regione" />
                            <Form.Select aria-label="Default select example">
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
    
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFuorisede">
      <Form.Label>Sei fuorisede?</Form.Label>
      <Form.Control />
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

<Row>
<Form.Group as={Col} controlId="formGridStudy_town">
      <Form.Label>Dove studi?</Form.Label>
      <Form.Control placeholder="Comune"/>
    </Form.Group>
</Row>                   
    
                            <Form.Group className="mb-3" controlId="study_province">
                            <Form.Label>Provincia:</Form.Label>
                            <Form.Control type="study_province" placeholder="Seleziona Provincia" />
                            <Form.Select aria-label="Default select example">
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
                                      
    
                            <Form.Group className="mb-3" controlId="study_region">
                            <Form.Label>Regione:</Form.Label>
                            <Form.Control type="study_region" placeholder="Seleziona Regione" />
                            <Form.Select aria-label="Default select example">
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

<Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFuorisede">
      <Form.Label>Hai trovato difficoltà nel trasferimento?</Form.Label>
      <Form.Control />
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

<Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Quali sono state?</Form.Label>
    <Form.Control />
  </Form.Group>
                    
                       <br>
                        <div class="row">
                          <div class="col">
                            <label for="study_type"><h4>Che tipo di studi stai facendo?*</h4></label>
                            </div></div>
                            <div class="row">
                             
                             <div class="col"><input type="radio" class="show_0_1" name="study_type" value="Triennale" ><label class="form-check-label" for="scelta">Triennale</label></div>
                             </div><div class="row">
                             <div class="col"><input type="radio" class="show_0_2" name="study_type" value="Magistrale_unico" ><label class="form-check-label" for="scelta">Magistrale a ciclo unico</label></div>
                            </div>
                             <div class="row">
                            <div class="col"><input type="radio" class="show_0_3" name="study_type" value="Magistrale" ><label class="form-check-label" for="scelta">Magistrale</label></div>
                             </div><div class="row">
                             <div class="col"><input type="radio" class="hide_0_1" name="study_type" value="Master" ><label class="form-check-label" for="scelta">Master</label></div>
                             </div><div class="row">
                             <div class="col"><input type="radio" class="hide_0_2" name="study_type" value="Dottorato" ><label class="form-check-label" for="scelta">Dottorato</label></div>
                              </div><div class="row">
                              <div class="col"><input type="radio" class="hide_0_3" name="study_type" value="scuolaspecialistica" ><label class="form-check-label" for="scelta">Specializzazione</label></div>
                              </div><div class="row">
                               <div class="col"><input type="radio" class="hide_0_4" name="study_type" value="altro" ><label class="form-check-label" for="scelta">Altro</label></div>
                              </div><br>
                        <div id="question_0">
                        <div class="card ">
                          <div class="card-header bg-primary">
                            <h3>Info sull'università</h3>
                          </div>
                        <div class="card-body bg-light text-dark font-weight-bold">
                         <div class="row">
                            <div class="col" id="uni">


                            
                                      
    
                            <Form.Group className="mb-3" controlId="select_uni">
                            <Form.Label>Che università frequenti?</Form.Label>
                            <Form.Control type="university" placeholder="Seleziona Università" />
                            <Form.Select aria-label="Default select example">
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


                                  <input type="text" id="other_uni" name="other_uni" >
                            </div></div><br>
                            <div class="row">
                            <div class="col">
                                <p for="presenza">Tipo di università?*</p> <p class="font-weight-normal">(in situazioni non di emergenza)</p>
                                <input type="radio"  name="uni_type" value="PRESENZA" ><label class="form-check-label" for="uni_type"> IN PRESENZA</label>
                                <input type="radio"  name="uni_type" value="ONLINE" ><label class="form-check-label" for="uni_type">TELEMATICA</label>
                            </div></div>
                            <br>
                            <div class="row">
                              <div class="col-md-6">
                                  <label for="department">Di quale dipartimento fai parte?* </label>
                                  <input type="text" class="form-control" id="department" name="department" >
                              </div>
                              <div class="col-md-6">
                                  <label for="degree_course">Che corso di laurea frequenti?* </label>
                                  <input type="text" class="form-control" id="degree_course" name="degree_course" >
                              </div>
                              </div>
                              <div class="row">
                                <div class="col"><br>
                                  <label for="subject_area">Quali sono le discipline principali del tuo corso?* </label>
                                  <p class="font-weight-normal">Elenca le discipline principali separate da un virgola (ES: scienze ambientali,matematica,biotecnologie agricole,robotica,game developing,sociologia.....)</p>
                                  <textarea type="text" class="form-control" id="subject_area" name="subject_area"></textarea>
                              </div>
                               
                              </div>
                              </div></div>
                           <div class="card">
                          <div class="card-header bg-primary">
                            <h3>Info sulla tua carriera universitaria</h3>
                          </div>
                        <div class="card-body bg-light text-dark font-weight-bold">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="enrolment_year">In che anno ti sei iscritto?* </label>
                                <input type="number" class="form-control" id="enrolment_year" name="enrolment_year" >
                            </div>
                        <div class="col-md-6">
                            <label for="end_year">In che anno prevedi di terminare l’università?* </label>
                            <input type="number" class="form-control" id="end_year" name="end_year"  >
                        </div>
                        </div><br>
                         <div class="row">
                            <div class=" col">
                                <p for="enrolment_type">Tipologia d'iscrizione:* </p>
                               <input type="radio"  name="enrolment_type" value="PART TIME" ><label class="form-check-label" for="scelta">PART TIME</label>
                                <input type="radio" name="enrolment_type" value="FULL TIME" ><label class="form-check-label" for="scelta">FULL TIME</label>
                            </div></div><br>
                       
                        <div class="row">
                        <div class=" col-md-4"></div>
                            <div class=" col-md-4">
                                <label for="degree_year">Che anno frequenti?* </label>
                                <input type="number" class="form-control" id="degree_year" name="degree_year" >
                            </div>
                            </div><br>
                            <div class="row">
                             <div class=" col-md-4"></div>
                        <div class="col-md-4">
                            <label for="average_grade">Che media hai?* </label>
                            <p class="font-weight-normal">Metti 0 se non hai ancora una media
                            <br> <b>N.B.</b> Scrivi 31, per mettere 30 E LODE</p>
                            <input type="number" min="0" max="31" step="0.01" class="form-control" id="average_grade" name="average_grade"  >
                        </div>
                         </div><br>
                        <div class="row">
                            <div class="col">
                                <p for="average_grade">Hai degli esami indietro?*</p>
                                <input type="radio" id="hide_1" name="exams_not_done" value="NO" ><label class="form-check-label" for="scelta">NO</label>
                                <input type="radio" id="show_1" name="exams_not_done" value="SI" ><label class="form-check-label" for="scelta">SI</label>
                                <div id="question_1">
                                <div class="row">
                                   <div class="col">
                                     <label for="numb_exams_not_done">Quanti sono?*</label>
                                     <input type="number" class="form-control" class="question_1" id="numb_exams_not_done" name="numb_exams_not_done" >
                                   </div> 
                                </div>
                            </div>
                        </div>
                        </div><br>
                        <div class="row">
                                <div class="col">
                                  <label for="difficult_aspect">Qual'è  l'ASPETTO del tuo corso che ti ha messo più in difficoltà?* </label>
                                  <p class="font-weight-normal">Es. i professori, l'ambiente, le materie, l organizzazione della didattica...</p>
                                  <input type="text" class="form-control" id="difficult_aspect" name="difficult_aspect" >
                              </div></div><br>
                              <div class="row">
                                <div class="col">
                                  <label for="easy_exams">Quali sono stati, finora,  gli ESAMI che hai trovato più FACILI? * </label>
                                  <p  class="font-weight-normal">Scrivi "NO" se non hai ancora dato nessun esame</p>
                                  <textarea type="text" class="form-control" id="easy_exams" name="easy_exams" ></textarea>
                              </div></div><br>
                               <div class="row">
                                <div class="col">
                                  <label for="hard_exams">Quali sono stati, finora, gli ESAMI che hai trovato più DIFFICILI? * </label>
                                  <p class="font-weight-normal"> Scrivi "NO" se non hai ancora dato nessun esame</p>
                                  <textarea type="text" class="form-control" id="hard_exams" name="hard_exams" ></textarea>
                              </div></div><br>
                              <div class="row">
                                <div class="col">
                                  <p for="redo_choice">Se potessi tornare indietro, sceglieresti di nuovo questo corso di laurea? * </p>
                                  <input type="radio" id="show_7" name="redo_choice" value="NO" ><label class="form-check-label" for="scelta">NO</label>
                                  <input type="radio" id="show_7_1" name="redo_choice" value="SI" ><label class="form-check-label" for="scelta">SI</label>
                                <div id="question_7">
                                  <div class="row">
                                  <div class="col">
                                    <label for="reason_redo_choice">Perchè? * </label>
                                    <textarea type="text" class="form-control question_7" id="reason_redo_choice"  name="reason_redo_choice" ></textarea>
                                </div>
                                </div>
                                </div></div>
                              </div><br>
                                <div class="row">
                                <div class="col">
                                  <label for="decision_choice">Cosa/Chi ti ha spinto a fare questa scelta? * </label>
                                  <textarea type="text" class="form-control" id="decision_choice" name="decision_choice" ></textarea>
                              </div></div>
                              <div class="row">
                                <div class="col"><br>
                                  <label for="expectations">Cosa ti aspettavi da questo corso di studi? * </label>
                                  <textarea type="text" class="form-control question_7" id="expectations" name="expectations" ></textarea>
                              </div></div><br>
                              <div class="row">
                                <div class="col">
                                  <p for="expectations_met">Finora, sono state soddisfatte le tue aspettative? * </p>
                                  <input type="radio" id="show_8" name="expectations_met" value="NO"   ><label class="form-check-label" for="expectations_met">NO</label>
                                <input type="radio" id="hide_8" name="expectations_met" value="SI" ><label class="form-check-label" for="expectations_met">SI</label>
                                <div id="question_8">
                                  <div class="row">
                                  <div class="col">
                                    <label for="expectations_no">Come mai? * </label>
                                    <textarea type="text" class="form-control question_8" id="expectations_no" name="expectations_no" ></textarea>
                                </div></div>
                                </div>
                              </div></div><br>
                                 <div class="row">
                                <div class="col">
                                  <p for="advice">Consiglieresti questa laurea? * </p>
                                  <input type="radio"  id="hide_9" name="advice" value="NO" ><label class="form-check-label" for="advice">NO</label>
                                  <input type="radio"  id="show_9" name="advice" value="SI" ><label class="form-check-label" for="advice">SI</label>
                              </div></div>
                              <div class="row" id="question_9_1">
                                <div class="col">
                                  <label for="advice_why">Perchè? * </label>
                                  <textarea type="text" class="form-control question_9_1"  id="advice_why" name="advice_why" ></textarea>
                              </div></div>
                              <div class="row" id="question_9_2">
                                <div class="col">
                                  <label for="advice_who">A chi la consiglieresti? * </label>
                                   <textarea type="text" class="form-control question_9_2" id="advice_who" name="advice_who" ></textarea>
                              </div></div><br>
                        <div class="card">
                          <div class="card-header bg-info text-light">
                            <h3>Esperienze all'estero</h3>
                          </div>
                        <div class="card-body">
                        <div class="row">
                           <div class="col">
                              <p for="abroad_experience">Hai fatto un’esperienza all’estero durante la tua carriera univeristaria?</p>
                              <input type="radio" id="hide_3"  name="abroad_experience" value="NO" ><label class="form-check-label" for="scelta">NO</label>
                              <input type="radio" id="show_3"  name="abroad_experience" value="SI" ><label class="form-check-label" for="scelta">SI</label>
                          </div>
                        </div>
                        <div id="question_3"><br>
                                  <div class="row">
                                   <div class="col">
                                     <label for="erasmus_type">Che tipo di esperienza?*</label>
                                     <input type="text" class="form-control" class="question_3" id="erasmus_type" name="erasmus_type" >
                                   </div> 
                                   </div><br>
                                   <div class="row">
                                    <div class="col-md-6">
                                     <label for="foreign_country">In che stato estero hai svolto la tua esperienza?*</label>
                                     <input type="text" class="form-control" class="question_3" id="foreign_country" name="foreign_country" >
                                   </div> 
                                    <div class="col-md-6">
                                     <label for="foreign_city">In che città estera hai svolto la tua esperienza?*</label>
                                     <input type="text" class="form-control" class="question_3" id="foreign_city" name="foreign_city" >
                                   </div> 
                                   </div>
                        </div>
                        </div></div>
                           <div class="card">
                          <div class="card-header bg-info text-light">
                            <h3>Cambi di corso</h3>
                          </div>
                        <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <p>Hai mai cambiato corso durante questa laurea?*</p>
                                <input type="radio" id="hide_2" name="change_degree" value="NO" ><label class="form-check-label" for="scelta">NO</label>
                                <input type="radio" id="show_2" name="change_degree" value="SI" ><label class="form-check-label" for="scelta">SI</label>
                                <div id="question_2"><br>
                                <div class="row">
                                   <div class="col">
                                     <label for="change_year">A che anno?*</label>
                                     <input type="number" min="1" max="5" class="form-control" class="question_2" id="change_year" name="change_year" >
                                   </div> 
                                   </div><br>
                                   <div class="row">
                                    <div class="col">

                            <Form.Group className="mb-3" controlId="prev_change_uni">
                            <Form.Label>Qual'era la tua precedente UNIVERSITA'?</Form.Label>
                            <Form.Control type="prev_change_uni" placeholder="Seleziona Università" />
                            <Form.Select aria-label="Default select example">
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
                                  <input type="text" id="prev_change_other_uni" name="prev_change_other_uni" >
                            </div>
                            </div><br>
                                     <div class="row">
                                    <div class="col-md-6">
                                     <label for="prev_change_department">Qual'era la tua precedente FACOLTA'?*</label>
                                     <input type="text" class="form-control" class="question_2" id="prev_change_department" name="prev_change_department" >
                                   </div> 
                                    <div class="col-md-6">
                                     <label for="prev_change_degree_course">Qual'era il tua precedente CORSO DI LAUREA?*</label>
                                     <input type="text" class="form-control" class="question_2" id="prev_change_degree_course" name="prev_change_degree_course" >
                                   </div> 
                                </div><br>
                                <div class="row">
                                   <div class="col">
                                     <label for="change_why">Come mai hai cambiato?*</label>
                                     <textarea type="text" class="form-control" id="change_why" name="change_why" ></textarea>
                   
                                   </div> 
                                </div>
                                </div>
                            </div></div></div>
							</div>
                            </div></div>
                             <div class="card" id="info_triennial">
                          <div class="card-header bg-primary">
                            <h3>Info Laurea triennale</h3>
                          </div>
                        <div class="card-body  bg-light text-dark font-weight-bold">
                        <div class="row">
                            <div class="col" id="uni">

                            <Form.Group className="mb-3" controlId="select_triennial">
                            <Form.Label>Che università hai frequentato alla triennale?</Form.Label>
                            <Form.Control type="triennial_university" placeholder="Seleziona Triennale" />
                            <Form.Select aria-label="Default select example">
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
                                  <input type="text" id="triennial_university_other" name="triennial_university_other" >
                            </div>
                            </div><br>
                            <div class="row">
                              <div class=" col">
                                <p for="triennial_university_type">Che tipo di università era?* </p>
                                 <input type="radio"  name="triennial_university_type" value="PRESENZA" ><label class="form-check-label" for="tipo_uni"> IN PRESENZA</label>
                                 <input type="radio"  name="triennial_university_type" value="ONLINE" ><label class="form-check-label" for="tipo_uni">TELEMATICA</label>
                            </div>
                            </div><br>
                            <div class="row">
                              <div class="col-md-6">
                                  <label for="triennial_department">Che facoltà hai frequentato?* </label>
                                  <input type="text" class="form-control" id="triennial_department" name="triennial_department" >
                              </div>
                              <div class="col-md-6">
                                  <label for="triennial_course_degree">Che corso di laurea hai fatto?* </label>
                                  <input type="text" class="form-control" id="triennial_course_degree" name="triennial_course_degree" >
                              </div>
                              </div><br>
                              <div class="row">
                                <div class="col">
                                  <label for="triennial_subject_area">Quali erano le discipline principali del tuo VECCHIO corso?* </label>
                                  <p class="font-weight-normal">Elenca le discipline principali separate da un virgola (ES: scienze ambientali,matematica,biotecnologie agricole,robotica,game developing,sociologia.....)</p>
                                  <textarea type="text" class="form-control" id="triennial_subject_area" name="triennial_subject_area" ></textarea>
                              </div></div><br>
                              <div class="row">
                            <div class="col-md-6">
                                <label for="triennial_enrolment_year">In che anno ti eri iscritto?* </label>
                                <input type="text" class="form-control" id="triennial_enrolment_year" name="triennial_enrolment_year" >
                            </div>
                        <div class="col-md-6">
                            <label for="triennial_end_year">In che anno ti sei laureato?* </label>
                            <input type="text" class="form-control" id="triennial_end_year" name="triennial_end_year"  >
                        </div></div><br>
                         <div class="row">
                            <div class=" col">
                                <p for="triennial_typer">Come ti eri iscritto?* </p>
                                <input type="radio"  name="triennial_type" value="PART TIME" ><label class="form-check-label" for="scelta">PART TIME</label>
                                <input type="radio" name="triennial_type" value="FULL TIME" ><label class="form-check-label" for="scelta">FULL TIME</label>
                            </div>
                        </div><br>
                         <div class="row">
                           <div class="col-md-6">
                              <label for="triennial_grade">Con che voto di laurea sei uscito?* </label>
                              <p class="font-weight-normal">Metti 111 se sei uscito con 110 E LODE</p>
                              <input type="number" min="0" max="111" id="triennial_grade" name="triennial_grade" class="form-control" >
                          </div>
                          <div class="col-md-6">
                            <p for="master_choice_related_studies">Hai scelto una magistrale inerente ai tuoi studi passati?*</p>
                            <input type="radio"  name="master_choice_related_studies" value="NO" ><label class="form-check-label" for="scelta">NO</label>
                            <input type="radio"  name="master_choice_related_studies" value="SI" ><label class="form-check-label" for="scelta">SI</label>
                        </div>
                        </div>
                        </div></div>
                        
                          <div class="card" id="info_highschool">
                          <div class="card-header bg-primary">
                            <h3>Info scuole superiori</h3>
                          </div>
                        <div class="card-body  bg-light text-dark font-weight-bold">
                        <div class="row">
                          <div class="col">

                          <Form.Group className="mb-3" controlId="select_highschool">
                            <Form.Label>Che scuola hai fatto alle superiori?</Form.Label>
                            <Form.Control type="high_school" placeholder="Seleziona Scuola Superiore" />
                            <Form.Select aria-label="Default select example">
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
                        <input type="text" id="other_high_school" name="other_high_school" >
                        </div></div><br>
                        <div class="row">
                           <div class="col">
                              <label for="main_subject">Quali erano le materie principali della tua scuola?* </label><p class="font-weight-normal">  (Elenca le materie separandole con una virgola) </p>
                              <textarea type="text" class="form-control" id="main_subject" name="main_subject" ></textarea>
                          </div>
                        </div><br>
                        <div class="row">
                           <div class="col-md-6">
                              <label for="favorite_subject">Qual era la tua materia preferita?* </label>
                              <input type="text" class="form-control" id="favorite_subject" name="favorite_subject" >
                          </div>
                           <div class="col-md-6">
                              <label for="baccalaureate">Che voto hai preso alla maturita?* </label>
                               <p class="font-weight-normal">Metti 101 se sei uscito con 100 E LODE</p>
                              <input type="number" min="60" max="101" class="form-control" id="baccalaureate" name="baccalaureate" >
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <p for="choice_related_studies">Hai scelto un  corso di laurea inerente agli studi delle superiori?*</p>
                            <input type="radio"  name="choice_related_studies" value="NO" ><label class="form-check-label" for="scelta">NO</label>
                            <input type="radio"  name="choice_related_studies" value="SI" ><label class="form-check-label" for="scelta">SI</label>
                        </div>
                        </div>
                        </div></div>
                         <div class="card">
                          <div class="card-header bg-primary">
                             <h3>Info esperienze lavorative</h3>
                          </div>
                        <div class="card-body bg-light text-dark font-weight-bold">
                        <div class="row">
                         <div class="col">
                            <p for="work_experience">Hai avuto esperienze lavorative durante gli studi?*</p>
                            <input type="radio" id="hide_4"  name="work_experience" value="NO" ><label class="form-check-label" for="scelta">NO</label>
                            <input type="radio" id="show_4" name="work_experience" value="SI" ><label class="form-check-label" for="scelta">SI</label>
                        </div>
                        </div><br>
                          <div id="question_4">
                                  <div class="row">
                                   <div class="col">
                                     <label for="work_experience_type">Che tipo di esperienza/e lavorativa/e?* </label><p class="font-weight-normal">(separare più esperienze con una virgola)</p>
                                     <input type="text" class="form-control" class="question_4" id="tipo_lavoro" name="work_experience_type" >
                                   </div></div> <br>
                                    <div class="row">
                                    <div class="col">
                                     <label for="work_related_studies">E' stata inerente al corso di studi?*</label> <p class="font-weight-normal"> (se ALMENO UNA delle esperienze sopra indicate riguarda quello che stai studiando indica SI)</p>
                                      <input type="radio"  class="question_4"  name="work_related_studies" value="NO" ><label class="form-check-label" for="scelta">NO</label>
                                      <input type="radio"  class="question_4" name="work_related_studies" value="SI" ><label class="form-check-label" for="scelta">SI</label>
                                   </div> </div><br>
                                   <div class="row">
                                   <div class="col">
                                     <label for="year_start_work">In che ANNO di LAUREA hai iniziato a lavorare?*</label><p class="font-weight-normal">Metti 0 se lavoravi già prima di studiare</p>
                                     <input type="number" class="question_4 form-control" id="year_start_work" name="year_start_work" >
                                   </div> </div>
                                   </div>
                        </div></div>
                         <div class="card">
                          <div class="card-header bg-primary">
                              <h3>Assegna una valutazione da 1 a 10 alle seguenti caratteristiche riguardanti la tua università: </h3>
                              <p> METTI 0 SE, in base alla tua esperienza,  NON PUOI VALUTARLO.</p>
                          </div>
                        <div class="card-body bg-light text-dark font-weight-bold">
                        <div class="row">
                          <div class="col-md-4">
                              <label for="didactic_quality">Qualità dell'offerta formativa:* </label>
                              <input type="number" min="0" max="10"  class="form-control" id="didactic_quality" name="didactic_quality" >
                          </div>
                         
                        <div class="col-md-4">
                            <label for="teaching_quality">Qualità dell’insegnamento dei professori:* </label>
                            <input type="number" min="0" max="10"  class="form-control" id="teaching_quality" name="teaching_quality" >
                        </div>
                        <div class="col-md-4">
                            <label for="exams_difficulties">Difficoltà degli esami:* </label>
                            <input type="number" min="0" max="10"  class="form-control" id="exams_difficulties" name="exams_difficulties" >
                        </div>
                        </div><br>
                         <div class="row">
                        <div class="col-md-4">
                            <label for="subjects_difficulties">Difficoltà delle materie:* </label>
                            <input type="number" min="0" max="10" class="form-control" id="subjects_difficulties" name="subjects_difficulties" >
                        </div>
                        <div class="col-md-4">
                            <label for="environment_quality">Qualità degli spazi di ateneo:* </label>
                            <input type="number" min="0"  max="10" class="form-control" id="environment_quality" name="environment_quality" >
                        </div>
                        <div class="col-md-4">
                            <label for="students_relationship">Qualità del rapporto con i colleghi:* </label>
                            <input type="number" min="0"  max="10" class="form-control" id="students_relationship" name="students_relationship" >
                        </div>
                        </div><br>
                         <div class="row">
                        <div class="col">
                            <label for="laboratories">Quanto sono presenti attività pratiche progettuali o di laboratorio?* </label>
                            <input type="number" min="0"  max="10" class="form-control" id="laboratories" name="laboratories" >
                        </div>
                        </div></div></div>
                          <div class="card">
                          <div class="card-header bg-primary">
                              <h3>Altre info</h3>
                          </div>
                        <div class="card-body bg-light text-dark font-weight-bold">
                        <div class="row">
                         <div class="col">
                            <label for="hobby">Quali sono i tuoi hobby?</label><p class="font-weight-normal"> (separa i vari hobby con una virgola)</p>
                            <textarea type="text" class="form-control" id="hobby" name="hobby" ></textarea>
                        </div>
                        </div><br>
                        <div class="row">
                        <div class="col">
                            <label for="dream_job">Qual è il lavoro dei tuoi sogni? </label>
                            <input type="text" class="form-control" id="dream_job" name="dream_job" >
                        </div>
                       </div><br>
                       <div class="row">
                        <div class="col">
                            <p for="review">Lascia una recensione sul tuo corso laurea </p><p class="font-weight-normal">(raccontaci di più su questo corso e sulla tua personale esperienza.)</p>
                            
                            <textarea  class="form-control" id="review" name="review" ></textarea>
                        </div>
                        </div><br>
                          <div class="row">
                        <div class="col">

                            <Form.Label>Voto recensione</Form.Label>
                            <Form.Control placeholder="Stars" />
                            <Form.Select aria-label="Default select example">
                                <option  value="1">⭐</option>
                                <option  value="2">⭐⭐</option>
                                 <option  value="3">⭐⭐⭐</option>
                                 <option  value="4">⭐⭐⭐⭐</option>
                                 <option  value="5">⭐⭐⭐⭐⭐</option>
                              </Form.select>

                         </div>
                        </div>
                        </div></div><br>
                        <Button type="submit">Invia</Button>
               
                   </div><br>
                     <div class="alert alert-primary" id="info">OPS! sei nel questionario sbagliato. Vai al questionario del <?var url = getScriptUrl();?><a href="<?=url?>?page=Laureato">LAUREATO</a></div>
                        
        
                  </div></div>
               
                        
                    </form>
                    <div id="output"></div>  
            </center>
        </div>
    </body>
      </>
    );
  }
}

export default Recensisci
//ReactDOM.render(<ReviewForm />, document.getElementById("Recensisci"));
