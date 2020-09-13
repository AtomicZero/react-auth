import React, { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    const {
      data: { message },
    } = await axios.post("http://localhost:4000/register", {
      email,
      password,
    });

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
    </>
  );
};
