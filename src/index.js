import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./app";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
