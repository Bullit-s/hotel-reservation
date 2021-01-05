import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import SingleRoom from "../pages/SingleRoom";
import ErrorPage from "../pages/ErrorPage";
import { AuthContext } from "../core/context/AuthContext";
import { Loader } from "../components/Loader";

const App: React.FC = () => {
  const { isLoadingAuth } = useContext(AuthContext);

  return (
    <Loader loading={isLoadingAuth}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </Loader>
  );
};

export default App;
