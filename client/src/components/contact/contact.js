import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./contact.css";
import logo from '../../assets/AlexSBLogo.svg';

const apiUrl = process.env.REACT_APP_API_URL;

const handleSubmit = async (values, setStatus, setResult, resetForm) => {
    setStatus('Sending...');
    try {
        const response = await axios.post(`${apiUrl}/message`, values);

        setStatus('Submit');
        console.log(response.data);

        if (response.data.status === 'success') {
            setResult({message: 'Message Sent Successfully!', color: "green"});
            resetForm();
        } else if (response.data.status === 'fail') {
            alert('Uh oh! Message failed to send.');
        }
    } catch (error) {
        console.error(error);
        setStatus('Submit');
        setResult({message: 'Uh oh! Issues with submitting message.', color: "red"});
    }
};

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Email is required";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.name) {
        errors.name = "Name is required";
    }

    if (!values.message) {
        errors.message = "Message is required";
    }

    return errors;
};

function ContactUs() {
    const [result, setResult] = useState({
        message: '',
        color: ''
  });
  const [status, setStatus] = useState('Submit');
    
  const formik = useFormik({
    initialValues: {
        email: "",
        name: "",
        message: ""
    },
    validate,
    onSubmit: (values, { resetForm }) => handleSubmit(values, setStatus, setResult, resetForm)
  });

  return (
      <div className="contact-container">
        <img className="ieee_logo" src={logo} alt='logo' />
        <div className="contact-text-container">
            <h2>
                Tell us anything
                <br />
                We are always happy with your messages
            </h2>
            <p>
          Do you have a feedback, suggestion,
          <br></br>
           some public relations stuff, or just wanna say Hi :)
                <br></br>
                send it now, we are with you 24/7 :)
            </p>
        </div>
        <div className="contact-form-container">
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
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <textarea
            placeholder="Message"
            name="message"
            id="message"
            style={{ height: 150 }}
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
          <button
            type="submit"
            className="submit-btn text-white cursor-pointer"
          >
            send
          </button>
          {result.message ? (
            <div className="result" style={{ color: result.color }}>{result.message}</div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;