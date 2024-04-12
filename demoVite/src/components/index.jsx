import { useState } from "react";
import meeting from "../assets/meeting.png"
import { Link } from "react-router-dom";

import "../App.css";

function HomeScreen() {

  return (
    <>
        <header class="header-info">
          <h2>Check-in Application</h2>
          <nav>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
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
          <Link to={"/register"}>Register Today</Link>
        </div>
        <footer className="footer">
          <p>Riley Ballard</p>
          <a href="https://github.com/rileyballard6/startup">
            Github Repository
          </a>
        </footer>
    </>
  );
}

export default HomeScreen;
