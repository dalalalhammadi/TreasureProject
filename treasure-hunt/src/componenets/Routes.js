import React from "react";
import { Route, Switch } from "react-router-dom";
import TreasureList from "./TreasureList";
import RandomList from "./RandomList";
import treasureStore from "../stores/treasureStore";
import { observer } from "mobx-react";

const Routes = () => {
  return (
    <div></div>
    // <Switch>
    //   <Route path="/random">
    //     <RandomList />
    //   </Route>
    //   <Route path="/treasure">
    //     <TreasureList treasures={treasureStore.treasures} />
    //   </Route>
    //   <Route exact path="/"></Route>
    // </Switch>
  );
};

export default observer(Routes);
