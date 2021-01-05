import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/sass/index.scss";
import { HashRouter as Router } from "react-router-dom";
import { RoomProvider } from "./core/context/RoomContext";
import { AuthProvider } from "./core/context/AuthContext";
import * as serviceWorker from "./serviceWorker";
import { ScrollToTop } from "./core/helpers/ScrollToTop";
import App from "./containers/App";

ReactDOM.render(
  <AuthProvider>
    <RoomProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </RoomProvider>
  </AuthProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
