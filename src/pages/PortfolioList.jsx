import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import ProjectItem from "../components/ProjetcItem";
import chart from "../img/chart.jpg";
import album from "../img/album.png";
import icon from "../img/icon.jpg";

class PortfolioList extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron m-0">
          <h1 className="display-4">Portfolio</h1>
          <p className="lead">
            These are some exercises using what I learned from ComIT React
            courses.
          </p>
          <hr className="my-4"></hr>
          <p>
            Hello! I'm Celine, a sofeware developer. This is my website. If you
            are also interested in programming, you are welcome to contact me.
          </p>
          {/* <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a> */}
        </div>
        <div className="d-flex jumbotron bg-white mt-0">
          <div className="container flex-fill mt-0">
            {/* <ProjectItem
              name="Vivian's Doodle Album"
              pName="/Detail"
              src={chart}
              alt="Vivian's Doodle Album"
              member="React, Bootstrap"
              brief="A doodle album using some bootstrap css."
            />
            <ProjectItem /> */}
            <div className="media border p-3 mt-3" style={{ height: "160px" }}>
              <img
                src={album} //"img_avatar3.png"
                alt=" Vivian's Doodle Album" //"John Doe"
                className="mr-3 mt-1"
                style={{ width: "60px" }}
              />
              <div className="media-body">
                <h4>
                  <NavLink exact to="/Album">
                    Vivian's Doodle Album
                  </NavLink>
                  <small className="pl-2">
                    <i> React, Bootstrap</i>
                  </small>
                </h4>
                <p>A doodle album using some bootstrap css.</p>
              </div>
            </div>
            <div className="media border p-3 mt-3" style={{ height: "160px" }}>
              <img
                src={icon} //"img_avatar3.png"
                alt="Display COVID-19 Data" //"John Doe"
                className="mr-3 mt-1"
                style={{ width: "60px" }}
              />
              <div className="media-body">
                <h4>
                  <NavLink exact to="/Portfolio">
                    Come soon.....
                  </NavLink>
                  <small className="pl-2">
                    <i> Come soon</i>
                  </small>
                </h4>
                <p>Come soon</p>
              </div>
            </div>
          </div>

          <div className="container flex-fill mt-0">
            <div className="media border p-3 mt-3" style={{ height: "160px" }}>
              <img
                src={chart} //"img_avatar3.png"
                alt="Display COVID-19 Data" //"John Doe"
                className="mr-3 mt-1"
                style={{ width: "60px" }}
              />
              <div className="media-body">
                <h4>
                  <NavLink exact to="/Covid">
                    Display COVID-19 Data
                  </NavLink>
                  <small className="pl-2">
                    <i> React, Bootstrap</i>
                  </small>
                </h4>
                <p>
                  Getting data from two CSV files,one file is for data of the
                  total cases by coutries, the other file is for the data of
                  time seriels by coutries or by provinces.After processing
                  data,to display the total cases data by countries in table,
                  and the daily cases changes by countries in line chart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PortfolioList;
