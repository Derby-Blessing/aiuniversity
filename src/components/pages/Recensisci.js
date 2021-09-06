import React from "react";
import ReactDOM from "react-dom";

/*export default function Recensisci() {
  return <h1 className="Recensisci">Recensisci</h1>;
}*/

class Recensisci extends React.Component {
  render() {
    return (
      <>
        <h1 className="Recensisci">RECENSISCI</h1>
        <form>
          <label>Età:</label>
          <input type="text" />
          <label>Sesso:</label>
          <input type="text" />
          <label>Città Originale:</label>
          <input type="text" />
          <label>Provincia Origine:</label>
          <input type="text" />
          <label>Fuori Sede:</label>
          <input type="text" />
          <label>Università:</label>
          <input type="text" />
          <label>Altro:</label>
          <input type="text" />
          <label>Tipologia Uni:</label>
          <input type="text" />
          <label>Corso Di Laurea:</label>
          <input type="text" />
          <label>Esami Principali:</label>
          <input type="text" />
          <label>Anno iscrizione:</label>
          <input type="text" />
          <label>Anno fine/Previsto:</label>
          <input type="text" />
          <label>Tipo Iscrizione:</label>
          <input type="text" />
          <label>Anno Attuale:</label>
          <input type="text" />
          <label>Media Esami:</label>
          <input type="text" />
          <label>Esami Non dati:</label>
          <input type="text" />
          <label>Aspetto Difficile:</label>
          <input type="text" />
          <label>Aspetto Facile:</label>
          <input type="text" />
          <label>Esami Difficili:</label>
          <input type="text" />
          <label>Esami Facili:</label>
          <input type="text" />
          <label>Valutazioni:</label>
          <input type="text" />
          <label>Ricensione:</label>
          <input type="text" />
          <label>Scuola Superiore / Altro:</label>
          <input type="text" />
          <label>Materie Preferite Scuola Superiore:</label>
          <input type="text" />
          <label>Materie Principali Scuola Superiore:</label>
          <input type="text" />
          <label>Scelta Relativa Studi:</label>
          <input type="text" />
          <label>Hobby:</label>
          <input type="text" />
          <label>Lavoro Sognato:</label>
          <input type="text" />
        </form>
      </>
    );
  }
}

export default Recensisci
//ReactDOM.render(<ReviewForm />, document.getElementById("Recensisci"));
