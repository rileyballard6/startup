import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../dashboard.css";
import ReviewForm from "./reviewForm";

export default function Dashboard({ currentUser }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://startup.cs260checkin.click/logininfo")
      .then((response) => response.json())
      .then((data) => setUserData(data.results));
  }, []);

  return (
    <body>
      <header class="header-info">
        <h2>Check-in Application</h2>
        <nav>
          <Link to={"/"}>Log Out</Link>
        </nav>
      </header>
      <div class="middle-dashboard">
        <h1 id="full_name">Welcome back, Admin</h1>
        <p id="web-socket-message"></p>
        <div class="dashboard-information">
          <div class="info">
            <h3 id="data_number">{userData.length}</h3>
            <h3>Current Employees</h3>
          </div>
          <div class="info">
            <h3 id="review_number">{userData.length}</h3>
            <h3>Forms to review</h3>
          </div>
          <div class="info">
            <h3 id="complete_number">0</h3>
            <h3>Forms complete</h3>
          </div>
          <div class="dashboard-information-employee">
            <h3>Forms to review:</h3>
            {userData.map((user) => {
              return (
                <ReviewForm
                  name={user.full_name}
                  answer1={user.response.goals}
                  answer2={user.response.goal_rate}
                  answer3={user.response.next_goals}
                />
              );
            })}
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>Riley Ballard</p>
        <a href="https://github.com/rileyballard6/startup">Github Repository</a>
      </footer>
    </body>
  );
}
