import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Form.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = () => {
  const [inputs, setInputs] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  console.log(`The base url: ${window.location.origin}`);
  const baseURL = window.location.origin;

  const formattedBaseUrl =
    baseURL.includes(":80") || baseURL.includes(":3000")
      ? baseURL.substring(0, baseURL.lastIndexOf(":"))
      : baseURL;

  console.log(`Final URL that axios will post to: ${formattedBaseUrl}`);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputs);
    axios
      .post(`${formattedBaseUrl}:5001/new-message`, inputs) // use for production enviro
      // .post("http://localhost:5001/new-message", inputs) // use for development enviro
      .then(function (response) {
        if (response.status === 201 || 200) {
          console.log(response);
          setInputs({});
          setOpen(true);
        } else {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(false);
    }

    setOpen(false);
  };
  return (
    <div className="form-container">
      <form className="form-form-container" onSubmit={handleSubmit}>
        <div className="form-inner-container">
          <div className="form-containers">
            <label className="form-labels">Name: </label>
            <br />
            <input
              className="form-textbox"
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-containers">
            <label className="form-labels">E-mail: </label>
            <br />
            <input
              className="form-textbox"
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-containers">
            <label className="form-labels">Subject: </label>
            <br />
            <input
              className="form-textbox"
              type="text"
              name="subject"
              value={inputs.subject || ""}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-containers">
            <label className="form-labels">Message: </label>
            <br />
            <textarea
              className="form-textarea"
              type="text"
              name="message"
              value={inputs.message || ""}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <input className="form-submit-btn" type="submit" value="Send" />
          </div>
        </div>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your message was successfully sent!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Form;
