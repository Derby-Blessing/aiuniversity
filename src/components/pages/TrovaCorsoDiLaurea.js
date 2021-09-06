import React from 'react';

class TrovaCorsoDiLaurea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCourse: 'Scegli corso'
    };
  }
  render() {
    return (
      <>
      <h1 className='TrovaCorsoDiLaurea'>TROVA CORSO DI LAUREA</h1>
      <form>
      <label>Scegli Corso</label>
      <select value={this.state.myCourse}>
        <option value="Università Degli Studi Di Parma"> Università Degli Studi Di Parma</option>
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
        <input type="text" />
      </form>
      </>
    );
  }
}

export default TrovaCorsoDiLaurea
