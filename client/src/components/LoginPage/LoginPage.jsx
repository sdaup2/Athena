import React, { useState } from "react";
import "./LoginPage.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    let success = true;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
    } catch (error) {
      console.log(error);
      success = false;
    }
    
    if (success) {
      navigate("/");
    } else {
      console.log("error");
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Navigate to signup page
    navigate("/")
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
