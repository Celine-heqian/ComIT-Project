import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import PortfolioList from "../pages/PortfolioList";

import Contact from "../pages/Contact";
import Covid from "./Covid";
import DoodleAlbum from "./DoodleAlbum";

class Main extends Component {
  render() {
    return (
      <main className="m-0" style={{ maxHeight: "800px" }}>
        <Switch>
          <Route path="" exact component={Home} />
          <Route path="/Home" exact component={Home} />

          <Route path="/Portfolio" exact component={PortfolioList} />
          <Route path="/Contact" exact component={Contact} />
          {/* <Route path="/Detail" exact component={PortfolioDetail} /> */}
          <Route path="/Covid" exact component={Covid} />
          <Route path="/Album" exact component={DoodleAlbum} />
        </Switch>
      </main>
    );
  }
}

export default Main;
