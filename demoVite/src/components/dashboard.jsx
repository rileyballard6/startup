import "../dashboard.css"

export default function Dashboard() {
    return (
        <body>
        <header class="header-info">
          <h2>Check-in Application</h2>
          <nav>
            <a href="index.html">Log-out</a>
          </nav>
        </header>
        <div class="middle-dashboard">
            <h1 id="full_name">Welcome back,</h1>
            <p id="web-socket-message"></p>
            <div class="dashboard-information">
                <div class="info">
                    <h3 id="data_number"></h3>
                    <h3>Current Employees</h3>
                </div>
                <div class="info">
                    <h3 id="review_number"></h3>
                    <h3>Forms to review</h3>
                </div>
                <div class="info">
                    <h3 id="complete_number"></h3>
                    <h3>Forms complete</h3>
                </div>
                <div class="dashboard-information-employee">
                  <h3>Forms to review:</h3>
                  <div class="employee-form" id="employee-form">
                    <button onclick="complete_form()" id="complete_form_button">Complete Form</button>
                    <h3>Employee Name</h3>
                    <div class="form_results">
                      <p>Answer 1</p>
                      <p>Answer 2</p>
                      <p>Answer 3</p>
                    </div>
                  </div>
                  
                </div>
            </div>
            
        </div>
        <footer className="footer">
          <p>Riley Ballard</p>
            <a href="https://github.com/rileyballard6/startup">Github Repository</a>
        </footer>
      </body>
    )
}