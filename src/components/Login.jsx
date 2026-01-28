import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@movie.com") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🎬 CineBook</h1>
        <p>Your gateway to the big screen</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleLogin}>Enter</button>
      </div>
    </div>
  );
}

export default Login;
