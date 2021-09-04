import React from 'react';
import ReactDOM from "react-dom";
//import '../../App.css';

/*export default function Consigliami() {
  return <h1 className='Consigliami'>CONSIGLIAMI</h1>;
}*/

class Consigliami extends React.Component {
  render() {
    return (
      <body>
        <center>    
      <div className="card col-6">
          <h1 className='card-header bg-warning'>CONSIGLIAMI</h1>
        <div className="card-body">
      <form>
        <div className="row justify-content-center">
          <div className="col ">
          <label class="form-label">Quali sono le tue materie preferite?</label>
          <input type="text" class="form-control" id="exampleInputEmail1" ></input>
          </div></div>
        <p>Hobby:</p>
        <input type="text" />
        <p>Lavoro Sognato:</p>
        <input type="text" />
        <p>Aspettative sull'università:</p>
        <input type="text" />
        <p>Motivi per la tua scelta:</p>
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
