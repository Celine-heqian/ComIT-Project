import React, { Component } from "react";
// import styles from "../pages/App.module.scss";

class Footer extends Component {
  render() {
    return (
      // <footer className="navbar navbar-dark bg-dark  justify-content-center fixed-bottom ">
      <div
        className="bg-dark justify-content-center d-flex align-itmes-center "
        style={{ height: "60px", padding: "0px", margin: "0px" }}
      >
        {/* <footer className="bg-dark text-center align-bottom m-0 p-0 "> */}
        <div className="align-bottom text-white text-bold font-weight-bold">
          <br></br>
          Powered by Reactjs
        </div>
        {/* </footer> */}
      </div>
    );
  }
}
export default Footer;
