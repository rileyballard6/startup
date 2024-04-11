import "../login.css";

export default function Login() {
  return (
    <div class="register-form">
      <div class="form">
        <form action="login" method="post">
          <h1>Enter Login Information</h1>
          <label for="username">Username</label>
          <input type="text" name="username" id="username" />
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
