import React, { useState } from "react";
import ClassroomWaitroom from "./ClassWaitroom";
import { socket } from "../../socket";
import { useNavigate } from "react-router-dom";

/** What it looks like when students are waiting for a session to begin */
const App = () => {

    const navigate = useNavigate();
    const [classCode, setClassCode] = useState([]);
    const [users, setUsers] = useState([]);

    socket
      .off("nav to waitroom")
      .on("nav to waitroom", (class_object) => {
        console.log(class_object);
        setClassCode(class_object.Code);
      });

    socket
      .off("students in room list")
      .on("students in room list", (student_list) => {
        const students_in_class = [student_list].map((c) => ({ name: c }));
        console.log(students_in_class);
        setUsers(students_in_class);
      });
  
    const handleStartSession = () => {
      // Handle starting the session
      socket.emit("starting questions");
      navigate("/studentanswerdisplay")
      
    };
  
    const handleCancel = () => {
      // Handle cancelling the session
    };
  
    return (
      <div>
        <ClassroomWaitroom
          classCode={classCode}
          users={users}
          onStartSession={handleStartSession}
          onCancel={handleCancel}
        />
      </div>
    );
  };
  
  export default App;