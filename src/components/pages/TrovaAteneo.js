import React from 'react';
import ReactDOM from "react-dom";

/*export const  pippo= ()=> {
  return <h1 className='TrovaAteneo'>TROVA ATENEO</h1>;
}*/

class TrovaAteneo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myUni: 'Seleziona Ateneo'
    };
  }
  render() {
    return (
      <body>
      <h1 className='TrovaAteneo'>TROVA ATENEO</h1>
      <form>
      <label>Scegli Ateneo</label>
      <select value={this.state.myUni}>
        <option value="Università Degli Studi Di Parma">Università Degli Studi Di Parma</option>
        <option value="Università Di Modena">Università Di Modena</option>
        <option value="Università Di Bologna">Università Di Bologna</option>
      </select> <br></br>
      <label>Informazione:</label>
        <input type="text" />
        <label>Regione:</label>
        <input type="text" />
        <label>Provincia:</label>
        <input type="text" />
        <label>Recensioni:</label>
        <input type="text" />
        <label>Corsi:</label>
        <input type="text" />
        <label>Recensioni Ateneo:</label>
      </form>
      </body>
    );
  }
}

export default TrovaAteneo



//ReactDOM.render(<SearchForm />, document.getElementById('trova'));

/*class ReviewForm extends React.Component {
  render() {
    return (
      <form>
        
        <p>Nome Ateneo:</p>
        <input type="text" />
        <p>Luogo:</p>
        <input type="text" />
        <p>Sito Web:</p>
        <input type="text" />
        <p>Ricensioni:</p>
        
      </form>
    );
  }
}
ReactDOM.render(<ReviewForm />, document.getElementById("root1"));*/
