import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";



ReactDOM.render(<App />, document.getElementById("menu"));
ReactDOM.render(<Router routes={App} />, document.getElementById("body"));
