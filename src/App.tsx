import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { RoomsPage } from "./pages/RoomsPage";
import { NotFound } from "./components/NotFound";
import { AuthContext } from "./core/context/AuthContext";
import { Loader } from "./components/ui/Loader";
import { RoomPage } from "./pages/RoomPage";

const App: React.FC = () => {
  const { isLoadingAuth } = useContext(AuthContext);

  return (
    <Loader loading={isLoadingAuth}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms/" component={RoomsPage} />
        <Route exact path="/rooms/:slug" component={RoomPage} />
        <Route component={NotFound} />
      </Switch>
    </Loader>
  );
};

export default App;
