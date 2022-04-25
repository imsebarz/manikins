import React, { useState } from "react";
import { Link, ETHTokenType } from "@imtbl/imx-sdk";
import "./register.scss";

const Register = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState();

  // Stat for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the password confirmation
  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
    if (e.target.value === password) {
      setError(false);
      setPasswordConfirmed(true);
    } else {
      setError(true);
      setPasswordConfirmed(false);
    }
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (name === "" || email === "" || password === "") &&
      passwordConfirmed == false
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  return (
    <section>
      <h1>Register</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
          required
          placeholder="Enter your name"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
          required
          placeholder="Enter your email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          required
          placeholder="Create a password"
          type="password"
        />
        <label className="label">Confirm Password</label>
        <input
          onChange={handlePasswordConfirm}
          className={`input ${passwordConfirmed === false ? "error" : ""}`}
          value={passwordConfirm}
          required
          placeholder="Enter your password again"
          type="password"
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      {!error ? <h1>Not errors</h1> : <h1>{error}</h1>}
    </section>
  );
};

export default Register;
