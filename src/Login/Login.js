import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
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
    try {
      const { data } = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      console.log(data.token);
    } catch (error) {
      if (error.response.data.message) {
        setStatusMessage(error.response.data.message);
      } else {
        setStatusMessage("Something went wrong with our servers!");
      }
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input type="email" value={email} onChange={onEmailChange} />
        <input type="password" value={password} onChange={onPasswordChange} />
        <button onClick={onSubmit}>Submit</button>
      </div>
      {statusMessage && <small>{statusMessage}</small>}
    </>
  );
};
