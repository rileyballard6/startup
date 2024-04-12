import "../form.css"
import "../login.css"
import { Navigate, Link } from "react-router-dom";

export default function EmployeeForm({ currentUser }) {


  function handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: currentUser.username,
        goals: e.target.elements.goals.value,
        goal_rate: e.target.elements.goal_rate.value,
        next_goals: e.target.elements.next_goals.value,
        form_complete: false
      }),
    };
    fetch("https://startup.cs260checkin.click/sendresponses", requestOptions).then((response) =>
    response.json()
  );


}

  return (
    <>
      <body>
        <header class="header-info">
          <h2>Check-in Application</h2>
          <nav>
          <Link to={"/"}>Log Out</Link>
          </nav>
        </header>
        <div class="middle-dashboard">
          <h1 id="full_name">Hello, {currentUser.username}</h1>
          <div class="employee-form">
            <div class="form-info" id="form-info">
              <form onSubmit={handleSubmit}>
                <label for="goals">What were your goals for this period?</label>
                <input type="text" name="goals" id="goals" required />
                <label for="goal-evaluation">
                  How would you rate your performance of those goals?
                </label>
                <div class="radio">
                  <label for="excellent">Excellent</label>
                  <input
                    type="radio"
                    value="Excellent"
                    name="goal_rate"
                    id="radio"
                    required
                  />
                  <label for="average">Average</label>
                  <input
                    type="radio"
                    value="Average"
                    name="goal_rate"
                    id="radio"
                  />
                  <label for="poor">Poor</label>
                  <input
                    type="radio"
                    value="Poor"
                    name="goal_rate"
                    id="radio"
                  />
                </div>

                <label for="next-goals">
                  What are your goals for next period?
                </label>
                <input
                  type="text"
                  name="next_goals"
                  id="next_goals"
                  required
                ></input>
                <button type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>Riley Ballard</p>
          <a href="https://github.com/rileyballard6/startup">
            Github Repository
          </a>
        </footer>
      </body>
    </>
  );
}
