import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ThankYou() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => setJoke(data))
  }, []);

  return (
    <div>
      <div>
        <header class="header-info">
          <h2>Check-in Application</h2>
          <nav>
            <Link to={"/"}>Log out</Link>
          </nav>
        </header>
        <div class="middle-dashboard">
          <div class="employee-form">
            <h1>Thank you for submission!</h1>
            <h2>For completing the form, here is a joke!</h2>
            <h3 id="joke_setup">{joke.setup}</h3>
            <h3 id="joke_punchline">{joke.punchline}</h3>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>Riley Ballard</p>
        <a href="https://github.com/rileyballard6/startup">Github Repository</a>
      </footer>
    </div>
  );
}
