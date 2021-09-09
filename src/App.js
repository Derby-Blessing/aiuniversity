import React from "react";
import Menu from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewHome from "./components/pages/NewHome";
import About from "./components/pages/About";
import Recensisci from "./components/pages/Recensisci";
import Consigliami from "./components/pages/Consigliami";
import TrovaAteneo from "./components/pages/TrovaAteneo";
import TrovaCorsoDiLaurea from "./components/pages/TrovaCorsoDiLaurea";
import SignUp from "./components/pages/SignUp";
import DettaglioCorso from "./components/pages/DettaglioCorso";


function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
        <Route path="/" exact component={NewHome} />
        <Route path="/about"  exact component={About} />
          <Route path="/recensisci" exact component={Recensisci} />
          <Route path="/consigliami" exact component={Consigliami}/>
          <Route path="/trova-ateneo"  exact component={TrovaAteneo} />
          <Route path="/trova-corso-di-laurea"  exact component={TrovaCorsoDiLaurea} />
          <Route path="/dettaglio-corso"  exact component={DettaglioCorso} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
   );
     }
export default App