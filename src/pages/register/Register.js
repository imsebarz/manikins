import React, { useState } from "react";
import "./register.scss";
import { registerUser } from "../../context/user/Actions";
import { useUserDispatch } from "../../context/user/State";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  // States for registration
  const navigate = useNavigate()
  const userDispatch = useUserDispatch()
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState();

  // Stat for checking the errors
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
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
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (name === "" || email === "" || password === "") &&
      passwordConfirmed === false
    ) {
      setError(true);
    } else {
      setError(false);
      const user = {
        name: name,
        username: username,
        email: email,
        password: password,
      }
      registerUser(userDispatch, user, navigate)
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

        <label className="label">Username</label>
        <input
          onChange={handleUsername}
          className="input"
          value={username}
          type="text"
          required
          placeholder="Create a username"
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

        <button type="submit">
          Submit
        </button>
      </form>
      <Link to='/' >
        <button>Go back</button>
      </Link>


      {!error ? <h1>Not errors</h1> : <h1>{error}</h1>}
    </section>
  );
};

export default Register;
