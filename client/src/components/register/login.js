import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./login.css";
import TextSection from "./text"


const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

function LogIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:5000/login', values);

        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <div className="login-container">
      <TextSection />
      <div className="login-form-container">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <button
            type="submit"
            className="submit-btn text-white cursor-pointer"
          >
            Welcome Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
