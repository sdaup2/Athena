import React, { useState } from "react";
import Header from "../../components/Navigation/Header";
import Footer from "../../components/Navigation/Footer";
import "./UserSettings.css";
import {getAuth, updateEmail, updatePassword} from "firebase/auth";

// handles updating a user's email and password
function UserSettings() {
  const [email, newEmail] = useState("");
  const [password, newPassword] = useState("");
  const auth = getAuth();

  // updates the user's email in firebase
  const handleEmailUpdate = async (event) => {
    event.preventDefault();
    try {
      updateEmail(auth.currentUser, email);
      console.log(email)
    } catch (error) {
      console.log(error);
    }
  }

  // updates the user's password in firebase
  const handlePasswordUpdate = async (event) => {
    event.preventDefault();
    try {
      updatePassword(auth.currentUser, password);
      console.log(password)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <h1>User Settings</h1>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => newEmail(e.target.value)}
        />
        <button type="update" onClick={handleEmailUpdate}>
          Update Email
        </button>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => newPassword(e.target.value)}
        />
        <button type="update" onClick={handlePasswordUpdate}>
          Update Password
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default UserSettings;
