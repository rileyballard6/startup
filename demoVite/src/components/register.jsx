import "../login.css"

export default function Register() {
  <div class="register-form">
    <div class="form">
      <form action="/register" method="post">
        <h1>Welcome to Checkin Application!</h1>
        <label for="full-name">Enter Full Name</label>
        <input type="text" name="full_name" id="full-name-r" />
        <label for="username">Enter Username</label>
        <input type="text" name="username" id="username-r" />
        <label for="password">Enter Password</label>
        <input type="password" name="password" id="password-r" />
        <button type="submit" onclick="register()">
          Register
        </button>
      </form>
    </div>
  </div>;
}
