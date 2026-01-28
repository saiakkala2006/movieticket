import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Admin credentials
    if (email === "admin@movie.com" && password === "Admin@123") {
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
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button onClick={handleLogin}>Login</button>

        <p className="hint">
          Admin? Use <span>admin@movie.com</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
