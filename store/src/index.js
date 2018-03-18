import React from "react"; //eslint-disable-line
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //eslint-disable-line
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();