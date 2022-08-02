import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "./helper/authAPI.js";

export default function Sign() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please{" "}
            <Link to="/login">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="card mt-3 col-6 offset-3">
        <div className="card-body bg-dark mt-3">
          <h4 className="card-title text-center" style={{ color: "red" }}>
            Sign up
          </h4>
          <form>
            <div>
              <label className="p-3" style={{ color: "red" }}>
                Email*
              </label>
              <br />
              <input
                type="text"
                name="Email"
                className="form-control"
                row="3"
                onChange={handleChange("email")}
                value={email}
                placeholder="Enter your email"
              ></input>
            </div>
            <div>
              <label className="p-3" style={{ color: "red" }}>
                Password*
              </label>
              <br />
              <input
                type="password"
                name="Password"
                value={password}
                onChange={handleChange("password")}
                className="form-control"
                row="3"
                placeholder="Enter your password"
              ></input>
            </div>
            <button
              className="btn btn-warning mt-3"
              onClick={onSubmit}
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
        {/* <p className="text-center">{JSON.stringify(values)}</p> */}
        {successMessage()}
        {errorMessage()}
      </div>
    </>
  );
}
