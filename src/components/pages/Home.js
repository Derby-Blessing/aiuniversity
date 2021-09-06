import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <body>
        <h1 className='Home'>HIIIII</h1>;
        <div class="card" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">Consigliami</h5>
          <p class="card-text">.....</p>
          <a href="#" class="btn btn-primary">.....</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">Lascia Una Recensione</h5>
          <p class="card-text">.....</p>
          <a href="#" class="btn btn-primary">......</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">Consigliami</h5>
          <p class="card-text">.....</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </body>
    )
  }
}

export default Home