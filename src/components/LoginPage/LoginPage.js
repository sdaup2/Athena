import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [navigateToDashboard, setNavigateToDashboard] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here
    setNavigateToDashboard(true);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Navigate to signup page
  };

  if (navigateToDashboard) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login to Athena</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label>Remember Me</label>
        </div>
        <button type="submit">Login</button>
        <button onClick={handleSignup}>Sign Up</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/help">Help</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LoginPage;
