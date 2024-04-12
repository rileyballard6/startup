import "../login.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../login.css";

export default function Login({ sendUserToApp }) {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      }),
    };

    fetch("https://startup.cs260checkin.click/login", requestOptions).then(function (
      response
    ) {
      if (response.status === 200) {
        sendUserToApp({
          username: e.target.elements.username.value,
          password: e.target.elements.password.value,
        });
        if (e.target.elements.username.value === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/form");
        }
      } else {
        navigate("/login");
      }
    });
  }
  return (
    <div className="register-wrapper">
      <div className="register-form">
        <div class="form">
          <form onSubmit={handleSubmit}>
            <h1>Enter Login Information</h1>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" />
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
