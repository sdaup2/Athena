
import React from 'react';
import Footer from '../../components/Navigation/Footer';
import Header from '../../components/Navigation/Header';
import './ClassWaitroom.css'

const ClassroomWaitroom = ({ classCode, users, onStartSession, onCancel }) => {
  return (
    <div>
      <Header />
      <div className="classroom-container">
        <div className="class-code-container">
          <h2 className="class-code">{classCode}</h2>
        </div>
        <div className="users-container">
          <h3 className="users-title">Users in Room:</h3>
          <ul className="users-list">
            {users.map(user => (
              <li className="users-list-item" key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
        <div className="buttons-container">
        <button className="cancel-button" onClick={onCancel}>
            <div className="cancel-button-text">Cancel</div>
          </button>
          <button className="start-session-button" onClick={onStartSession}>
            <div className="start-session-text">Start Session</div>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ClassroomWaitroom;
