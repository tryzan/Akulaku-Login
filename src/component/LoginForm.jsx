import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required></input>
          </div>
          <button type="Submit">Login</button>
          <div className="register-wrap">
            <p>
              Don't have account? <a href="#">Register Now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
