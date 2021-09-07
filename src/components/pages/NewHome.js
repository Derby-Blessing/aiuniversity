import React from 'react';



class NewHome extends React.Component {
    render() {
      return (
        <>
        <center>
        <div class="card mb-3 max-width: 540px;">
          <div class="row no-gutters">
              <div class="col-md-4">
                <img src="Images/Consigliami.jpg" class="card-img" ></img>
              </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h2 class="card-title">Consigliami</h2>
                    <p class="card-text">La pagina consigliami.....</p>
                    <a href="#" class="btn btn-primary">Vedi</a>
                  </div>
                </div>
            </div>
        </div>
        <div class="card-columns">
            <div class="card">
              <img src="Images/Uni_scelta1.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h2 class="card-title">Trova Ateneo</h2>
                  <p class="card-text">Non sei sicura di quale ateneo vuoi frequentare? Sei indecisa su quale corso è giusto per te? 
                    Non preoccuparti più....Siamo qui per aiutarti.......</p>
                    <a href="#" class="btn btn-primary">Vedi</a>
                </div>
          </div>
          <div class="card">
            <img src="Images/Reviews.jpg" class="card-img-top" alt="..."></img>
             <div class="card-body">
                <h2 class="card-title">Lasciaci Una Recensione</h2>
                <p class="card-text">Hai avuta una buona esperienza con AIUniversity? Hai trovato l'ateneo che volevi?</p>
                <a href="#" class="btn btn-primary">Vedi</a>
             </div>
          </div>
          <div class="card  width: 18rem;">
            <img src="Images/More_info.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h2 class="card-title">Hai Bisogno di Altri Informazioni?</h2>
              <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><a href="#" class="card-link">Trova Corso Di Laurea</a></li>
              <li class="list-group-item"><a href="#" class="card-link">Trova Ateneo</a></li>
            </ul>
          </div>
          </div>
        </center> 
        </>
      )
    }
}
export default NewHome