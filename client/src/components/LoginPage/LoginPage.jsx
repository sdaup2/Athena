import React, { useState } from "react";
import "./LoginPage.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    // setNavigateToDashboard(true);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Navigate to signup page
  };

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
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <button onClick={handleSignup}>Sign Up</button>
      </form>
    </div>
  );
}

export default LoginPage;
