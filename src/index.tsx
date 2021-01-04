import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { RoomProvider } from "./store/context";
import * as serviceWorker from "./serviceWorker";
import { ScrollToTop } from "./core/helpers/ScrollToTop";
import App from "./containers/App";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
