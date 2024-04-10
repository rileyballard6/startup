import { useState } from "react";
import meeting from "./assets/meeting.png"

import "./App.css";

function App() {

  return (
    <>
      <body>
        <header class="header-info">
          <h2>Check-in Application</h2>
          <nav>
            <a href="register.html">Register</a>
            <a href="login.html">Login</a>
          </nav>
        </header>
        <div class="middle-info">
          <h1>Perfomance reviews made easier!</h1>
          <p>
            Your ultimate solution for streamlined and effective performance
            reviews! Say goodbye to the hassle of traditional review processes
            and embrace a user-friendly platform designed to make performance
            evaluations a breeze.
          </p>
          <img src={meeting} alt="business meeting" />
          <a href="register.html">Register Today</a>
        </div>
        <footer>
          <p>Riley Ballard</p>
          <a href="https://github.com/rileyballard6/startup">
            Github Repository
          </a>
        </footer>
      </body>
    </>
  );
}

export default App;
