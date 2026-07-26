import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="logo">MyApp</h1>

        <h2>Create Account</h2>
        <p className="subtitle">Sign up to get started</p>

        <input 
          type="text" 
          placeholder="Full Name" 
        />

        <input 
          type="email" 
          placeholder="Email" 
        />

        <input 
          type="password" 
          placeholder="Password" 
        />

        <input 
          type="password" 
          placeholder="Confirm Password" 
        />

        <button>
          Sign Up
        </button>

        <p className="login-text">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;