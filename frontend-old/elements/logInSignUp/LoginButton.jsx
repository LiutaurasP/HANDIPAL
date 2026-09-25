//import { useNavigate } from "react-router-dom";
import "./LoginButton.css";

function LoginButton() {
  const navigate = useNavigate();

  return (
    <button 
      className="login-button"
      onClick={() => navigate("/login")}
    >
      Log In
    </button>
  );
}

export default LoginButton;