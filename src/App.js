import React from "react";
import Menu from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewHome from "./components/pages/NewHome";
import About from "./components/pages/About";
import Recensisci from "./components/pages/Reviews";
import Consigliami from "./components/pages/GetMeAnAdvice";
import InfoUni from "./components/pages/subpages/UniInfo";
import TrovaAteneo from "./components/pages/FindUni";
import TrovaCorso from "./components/pages/FindDegreeCourse";
import DettaglioCorso from "./components/pages/subpages/CourseDetail";
import ReviewAlgorithm from "./components/pages//subpages/ReviewAlgorithm";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={NewHome} />
          <Route path="/about" exact component={About} />
          <Route path="/raccontaci-esperienza" exact component={Recensisci} />
          <Route path="/consigliami" exact component={Consigliami} />
          <Route path="/trova-ateneo" exact component={TrovaAteneo} />
          <Route path="/info-ateneo" exact component={InfoUni} />
          <Route
            path="/trova-corso-di-laurea"
            exact
            component={TrovaCorso}
          />
          <Route path="/dettaglio-corso" exact component={DettaglioCorso} />
          <Route path="/review-algorithm" exact component={ReviewAlgorithm} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
