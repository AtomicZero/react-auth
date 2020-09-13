import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    const {
      data: { success, message },
    } = await axios.post("http://localhost:4000/register", {
      email,
      password,
    });

    if (success) {
      setRegistrationSuccess(true);
    }

    setStatusMessage(message);
  };

  return (
    <>
      <div>
        <h2>Register</h2>
        <input type="email" value={email} onChange={onEmailChange} />
        <input type="password" value={password} onChange={onPasswordChange} />
        <button onClick={onSubmit}>Submit</button>
      </div>
      {statusMessage && <small>{statusMessage}</small>}
      <div>
        {registrationSuccess && <Link to="/login">Go to login here!</Link>}
      </div>
    </>
  );
};
