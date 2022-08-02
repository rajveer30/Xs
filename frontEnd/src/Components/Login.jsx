import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { signin } from "./helper/authAPI";

export default function Login() {
  const [values, setValues] = useState({
    email: "namanbisht84@gmail.com",
    password: "namsb54321",
    didRedirect: false,
  });

  const { email, password, didRedirect } = values;

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   // setValues({ ...values });
  //   // signin({ email, password })
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //     if (data.error) {
  //   //       setValues({ ...values, error: data.error });
  //   //     } else {
  //   //       setValues({
  //   //         ...values,
  //   //         didRedirect: true,
  //   //       });
  //   //     }
  //   //   })
  //   //   .catch(console.log("signin request failed"));

  //   performRedirect();
  // };

  // const performRedirect = () => {
  //   return <Navigate to="/admin/About" />;
  // };

  return (
    <>
      <div>
        <div className="card mt-3 col-6 offset-3">
          <div className="card-body bg-dark  mt-3">
            <h4 className="card-title text-center" style={{ color: "red" }}>
              Log in
            </h4>
            <form>
              <div>
                <label className="p-3" style={{ color: "red" }}>
                  Email*/UserName*
                </label>
                <br />
                <input
                  type="text"
                  name="Email"
                  className="form-control"
                  row="3"
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
                  className="form-control"
                  row="3"
                  value={password}
                  placeholder="Enter your password"
                ></input>
              </div>
              <button className="btn btn-warning mt-3">
                <Link
                  to="/about"
                  style={{ color: "black !important", textDecoration: "none" }}
                >
                  log in
                </Link>
              </button>
            </form>
          </div>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/sign">Sign up</Link>
          </div>
        </div>
      </div>
      {/* {performRedirect()} */}
    </>
  );
}
