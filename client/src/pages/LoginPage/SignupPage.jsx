import React, { useState } from "react";
import "./LoginPage.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/")
    // Navigate to signup page
  };

  return (
    <div>
      <h1>Sign up for Athena</h1>
      <form onSubmit={handleSignup}>
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
        <button type="submit" onClick={handleSignup}>
          Sign Up
        </button>
        <button onClick={handleLogin}>Log In</button>
      </form>
    </div>
  );
}

export default SignupPage;