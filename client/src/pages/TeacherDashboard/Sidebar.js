import React from "react";
import { Link } from "react-router-dom"; // assuming you're using React Router for navigation

function Sidebar({ classes, onCreateClass }) {
  return (
    <div className="sidebar">
      <h2>My Classes</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <Link to={`/teacher/class/${classItem.id}`}>{classItem.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onCreateClass}>Create New Class</button>
    </div>
  );
}

export default Sidebar;
