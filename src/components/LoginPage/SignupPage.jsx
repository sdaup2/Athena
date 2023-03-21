import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    // Perform signup logic here
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    if (!termsAccepted) {
      setErrorMessage("Please accept the terms and conditions");
      return;
    }
    // Create new account
  };

  return (
    <div className="form-group">
      <h1>Create Account</h1>
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Gender:</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Interests:</label>
        <input
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
        <div>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
          />
          <label>
            {/* I agree to the <Link to="/terms">terms and conditions</Link> */}
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit">Create Account</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <nav>
        <ul>
          <li>
            <p>Home</p>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            <p>Login</p>

            {/* <Link to="/login">Login</Link> */}
          </li>
          <li>
            <p>Help</p>
            {/* <Link to="/help">Help</Link> */}
          </li>
        </ul>
      </nav>
      <p>
        {/* Already have an account? <Link to="/login">Log in here</Link> */}
        Already have an account? Log in here
      </p>
    </div>
  );
}

export default SignupPage;
