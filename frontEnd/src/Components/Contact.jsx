import React, { useState } from "react";
import { Link } from "react-router-dom";
import { contactAPI } from "./helper/authAPI.js";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    details: "",
  });

  const { name, email, subject, details } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    contactAPI({ ...values })
      .then((data) => {
        setValues({
          ...values,
          email: "",
          password: "",
          error: "",
          success: true,
        });
      })
      .catch(console.log("Error in signup"));
  };

  return (
    <>
      <header className="container-fluid bg-primary">
        <nav className="container navbar navbar-expand-md navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Xenon{" "}
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="row">
        <div className="col-md-8">
          <div className="contact-shadow">
            <form className="mx-5 mt-5">
              <div className="contact-form">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Please enter your name"
                            className="form-control"
                            required
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="tel"
                            name="conatct"
                            placeholder="Please enter your number"
                            className="form-control "
                            required
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Please enter your email"
                            className="form-control "
                            required
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Subject</label>
                          <input
                            type="text"
                            name="subject"
                            placeholder="Please enter your subject"
                            className="form-control "
                            required
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Details</label>
                          <textarea
                            name="message"
                            placeholder="Message for us"
                            rows="4"
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          className="contact btn btn-primary"
                          onClick={onSubmit}
                        >
                          Send Enquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
