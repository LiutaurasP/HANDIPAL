//import { useNavigate } from "react-router-dom";

function SignupButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/signup")}>
      Sign Up
    </button>
  );
}

export default SignupButton;