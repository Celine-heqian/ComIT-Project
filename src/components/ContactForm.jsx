import React, { Component } from "react";
import ReactFormValidation from "react-form-input-validation";

class ContactFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        customer_firstname: "",
        customer_lastname: "",
        email_address: "",
        comments: "",
      },
      errors: {},
    };
    this.form = new ReactFormValidation(this, { locale: "en" });
    this.form.useRules({
      customer_firstname: "required",
      customer_lastname: "required",
      email_address: "required|email",

      comments: "required|max:256",
    });

    /* let messages = ReactFormValidation.getMessages('en');
    messages.required = 'Whoops, :attribute field is required.';
    ReactFormValidation.setMessages('en', messages);
    ReactFormValidation.useLang('en') */
  }

  render() {
    return (
      <div className="m-3 p-4">
        <form
          className="myForm"
          noValidate
          autoComplete="off"
          onSubmit={this.form.handleSubmit}
        >
          <div
            className="d-flex flex-row  justify-content-around"
            style={{ height: "400px" }}
          >
            <div className="col-4">
              <div className="form-group">
                <label className="col-form-label pr-3">First Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="customer_firstname"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.customer_firstname}
                  // To override the attribute name
                  data-attribute-name="First Name"
                />

                <label className="error" style={{ color: "red" }}>
                  {this.state.errors.customer_firstname
                    ? this.state.errors.customer_firstname
                    : ""}
                </label>
              </div>

              <p>
                <label className="col-form-label pr-3">Last Name </label>
                <input
                  className="form-control"
                  type="text"
                  name="customer_lastname"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.customer_lastname}
                  // To override the attribute name
                  data-attribute-name="Last Name"
                />

                <label className="error" style={{ color: "red" }}>
                  {this.state.errors.customer_lastname
                    ? this.state.errors.customer_lastname
                    : ""}
                </label>
              </p>

              <p>
                <label className="col-form-label pr-3">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email_address"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email_address}
                  data-attribute-name="Email"
                />

                <label className="error" style={{ color: "red" }}>
                  {this.state.errors.email_address
                    ? this.state.errors.email_address
                    : ""}
                </label>
              </p>
            </div>
            <div className="col-6">
              <p>
                <label className="col-form-label pr-3">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="comments"
                  maxLength="256"
                  value={this.state.fields.comments}
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                  data-attribute-name="Message"
                ></textarea>

                <label className="error" style={{ color: "red" }}>
                  {this.state.errors.comments ? this.state.errors.comments : ""}
                </label>
              </p>

              <p>
                <button type="submit" className="btn btn-outline-secondary">
                  Submit Message
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default ContactFrom;
