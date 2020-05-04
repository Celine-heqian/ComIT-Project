import React, { Component } from "react";

import Card from "./Card";
import pvivi from "../img/vivi/pvivi.jpg";

class DoodleAlbum extends Component {
  state = {};

  render() {
    return (
      <div className="bg-dark">
        <div className="d-flex flex-row jumbotron bg-dark m-0 justify-content-around align-items-center">
          <div className="col-4 flex-fill">
            <div class="card m-0" style={{ maxWidth: "540px" }}>
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src={pvivi} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Vivian</h5>
                    <p class="card-text">
                      Vivian is a little illustrator.She loves doodling now and
                      then.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clo-7 flex-fill">
            <h1 className="display-4 text-light">Vivian's Doodle Album</h1>
          </div>
        </div>
        <hr className="border" />
        {/* <div className="d-flex container-fluid mt-0 bg-dark p-0 "> */}
        <div className="container-fluid ">
          <Card />
        </div>
      </div>
    );
  }
}
export default DoodleAlbum;
