import React, { Component } from "react";
import ContactFrom from "../components/ContactForm";

class Contact extends Component {
  render() {
    return (
      <div className="">
        <div className="jumbotron m-0 h-75">
          <h1 className="display-4">Contact</h1>
          <p className="lead">
            If you are also interested in programming, you are welcome to
            contact me. a message.
          </p>
          <hr className="my-4"></hr>
          <p>You can leave me a message below or send me an email.</p>
          {/* <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a> */}
        </div>
        <ContactFrom />
      </div>
    );
  }
}
export default Contact;
