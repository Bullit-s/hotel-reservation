import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import Rooms from "./pages/Rooms";
import ErrorPage from "./pages/ErrorPage";
import { AuthContext } from "./core/context/AuthContext";
import { Loader } from "./components/ui/Loader";
import { Room } from "./pages/Room";

const App: React.FC = () => {
  const { isLoadingAuth } = useContext(AuthContext);

  return (
    <Loader loading={isLoadingAuth}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={Room} />
        <Route component={ErrorPage} />
      </Switch>
    </Loader>
  );
};

export default App;
