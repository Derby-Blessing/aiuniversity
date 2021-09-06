import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Ricensisci from "./components/pages/Recensisci";
import Consigliami from "./components/pages/Consigliami";
import TrovaAteneo from "./components/pages/TrovaAteneo";
import TrovaCorsoDiLaurea from "./components/pages/TrovaCorsoDiLaurea";
import SignUp from "./components/pages/SignUp";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/ricensisci" component={Ricensisci} />
          <Route path="/consigliami" component={Consigliami}></Route>
          <Route path="/trova-ateneo" component={TrovaAteneo} />
          <Route path="/trova-corso-di-laurea" component={TrovaCorsoDiLaurea} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
