export default function EmployeeForm() {
  return (
    <>
      <body>
        <header class="header-info">
          <h2>Check-in Application</h2>
          <nav>
            <a href="index.html">Log-out</a>
          </nav>
        </header>
        <div class="middle-dashboard">
          <h1 id="full_name">Hello, </h1>
          <div class="employee-form">
            <div class="form-info" id="form-info">
              <form action="/sendresponses" method="post">
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
                <button type="submit" onclick="sendMessage()">
                  Submit
                </button>
              </form>
            </div>
          </div>
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