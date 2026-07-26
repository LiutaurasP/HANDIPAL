import "./logIn.css";

function logIn() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="logo">MyApp</h1>

        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to continue</p>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button>Log In</button>

        <p className="signup-text">
          Don't have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default logIn;