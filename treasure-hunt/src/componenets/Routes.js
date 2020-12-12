import React from "react";
import { Route, Switch } from "react-router-dom";
import TreasureList from "./TreasureList";
import RandomList from "./RandomList";
import treasureStore from "../stores/treasureStore";
import { observer } from "mobx-react";
import Home from "./Home";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/random">
          <RandomList />
        </Route>
        <Route path="/treasure">
          <TreasureList treasures={treasureStore.treasures} />
        </Route>
        <Route path="/signin">
          <SigninForm />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default observer(Routes);
