import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import cover4 from "../img/cover4.jpg";
import cover5 from "../img/cover5.jpg";
import cover7 from "../img/cover7.jpg";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

class Home extends Component {
  render() {
    return (
      <div className="d-flex flex-row bg-dark align-items-start p-1 m-0">
        <div className="bg-dark col-9 ">
          <div
            id="carouselExampleIndicators"
            className="carousel slide bg-dark p-2 justify-content-center"
            data-ride="carousel"
            style={{ width: "1400px" }}
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img
                  src={cover4}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img src={cover5} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img
                  src={cover7}
                  className="d-block w-100 align-self-center"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="jumbotron col-3 p-md-1  text-white rounded bg-dark align-middle m-0">
          <div className="p-0">
            <h1 className="display-4 font-italic text-primary font-weight-bold">
              Welcome!
            </h1>
            <p className="lead my-1 font-weight-bold mt-3 ">
              Welcome to my website!
            </p>
            <p className="lead text-justify mt-3">
              I am now living in Calgary, Canada. In the past three months, I
              learned HTML, CSS and React at ComIT,which is unforgetable. After
              comlpeting this course, I will continue to learn programming.
            </p>
            <p className="lead text-justify mt-3">
              If you are interested in programming and willing to share your
              idea or discuss about it, you could contact me.
            </p>
          </div>
          <div className="lead mt-5">
            <NavLink
              className="btn btn-outline-light text-light  btn-lg"
              exact
              to="/Portfolio"
            >
              Browse website
            </NavLink>
            {/* <a href="#" className="text-white font-weight-bold">
                Continue reading...
              </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
