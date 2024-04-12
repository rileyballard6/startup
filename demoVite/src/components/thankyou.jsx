export default function ThankYou() {
  return (
    <div>
      <div>
        <header class="header-info">
          <h2>Check-in Application</h2>
          <nav>
            <a href="index.html">Log-out</a>
          </nav>
        </header>
        <div class="middle-dashboard">
          <h1 id="full_name">Hello,</h1>
          <div class="employee-form">
            <h1>Thank you for submission!</h1>
            <h2>For completing the form, here is a joke!</h2>
            <h3 id="joke_setup"></h3>
            <h3 id="joke_punchline"></h3>
          </div>
        </div>
      </div>
      <footer>
        <p>Riley Ballard</p>
        <a href="https://github.com/rileyballard6/startup">Github Repository</a>
      </footer>
    </div>
  );
}
