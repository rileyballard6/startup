import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../login.css";

export default function Register({ sendUserToApp }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      }),
    };

    fetch("https://startup.cs260checkin.click/register", requestOptions).then((response) =>
      response.json()
    );
    sendUserToApp({
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    });
    navigate("/form");
  }

  return (
    <div className="register-wrapper">
      <div class="register-form">
        <div class="form">
          <form onSubmit={handleSubmit}>
            <h1>Welcome to Checkin Application!</h1>
            <label for="full-name">Enter Full Name</label>
            <input type="text" name="full_name" id="full-name-r" />
            <label for="username">Enter Username</label>
            <input type="text" name="username" id="username-r" />
            <label for="password">Enter Password</label>
            <input type="password" name="password" id="password-r" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
