import React, { useState } from "react";
import ClassroomWaitroom from "./ClassWaitroom";
import { socket } from "../../socket";

/** What it looks like when students are waiting for a session to begin */
const App = () => {

    socket.emit("get class info");
    const [classCode, setClassCode] = useState([]);
    const [users, setUsers] = useState([]);

    socket.on("nav to waitroom", (class_object, student_list) => {
      console.log(class_object);
      setClassCode(class_object.Code);
      const students_in_class = [student_list].map((c) => ({ name: c }));
      console.log(students_in_class);
      //setUsers(students_in_class);
    });
  
    const handleStartSession = () => {
      // Handle starting the session
      socket.emit("starting questions");
      
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