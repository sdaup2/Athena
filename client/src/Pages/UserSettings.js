import React, { useRef, useState } from "react";
import Header from "../components/Navigation/Header";
import Footer from "../components/Navigation/Footer";
import "./UserSettings.css";
import firebase from "../firebase";
import {updateEmail} from "firebase/auth";

function UserSettings() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("");
  /* useAuth */
  const handleChangeUsername = async (event) => {
    event.preventDefault();
    let success = true;
    try {
      const user = firebase.auth().currentUser;
      console.log(user.email)
      const emailUpdate = await updateEmail(user, email)
    } catch (error) {
      console.log(error);
      success = false;
    }
  }

  const getEmail = async (event) => {
    const user = firebase.auth().currentUser;
  }

  /*
  const reauthenticate = (currentPassword) => {
    var cred = EmailAuthProvider.credential(
        user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  };

  const changePassword = (currentPassword, newPassword) => {
    reauthenticate(currentPassword).then(() => {
      var user = auth().currentUser;
      user.updatePassword(newPassword).then(() => {
        console.log("Password updated!");
      }).catch((error) => { console.log(error); });
    }).catch((error) => { console.log(error); });
  }

  const handleEmailChange = async (event) => {
    event.preventDefault();
    let success = true;
    try {
      const userLog = await 
    }
    */

  return (
    <div>
      <Header />
      <h1>User Settings</h1>
      <form>
        <label>Email:</label>
        <input
          type="email"
          placeholder = "New Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="update" onClick = {handleChangeUsername}>
          Update Email
        </button>
        <label>Password:</label>
        <input
          type="password"
          placeholder="New Password"
        />
        <button type="update">
          Update Password
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default UserSettings;
