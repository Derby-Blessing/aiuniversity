import React from 'react';
//import ReactDOM from "react-dom";

/*export default function Consigliami() {
  return <h1 className='Consigliami'>CONSIGLIAMI</h1>;
}*/

class Consigliami extends React.Component {
  render() {
    return (
      <body>
        <center>    
      <div className="card col-6">
          <h1 className='card-header bg-info'>CONSIGLIAMI</h1>
        <div className="card-body">
      <form>
        <div className="row justify-content-center">
          <div className="col ">
          <label class="form-label">Quali sono le tue materie preferite?</label>
          <input type="text" class="form-control" id="exampleInputEmail1" ></input>
          </div></div>
        <p>Cos'è il tuo hobby?</p>
        <input type="text" />
        <p>Qual è il lavoro dei tuoi sogni?</p>
        <input type="text" />
        <p>Quali sono le tue aspettative sull'università?</p>
        <input type="text" />
        <p>Quali sono i motivi della tua scelta?</p>
        <input type="text" />
        <p>Ti piacerebbe continuare con i tuoi studi precedenti?:</p>
        <input type="text" />
        </form>
        </div>
        </div>
        </center>
        </body>
        
    );
  }
}

export default Consigliami
//ReactDOM.render(<AdviseForm />, document.getElementById("body"));
