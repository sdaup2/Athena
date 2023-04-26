import React, { useState } from "react";
import ClassroomWaitroom from "../components/ClassWaitroom/ClassWaitroom";
import { socket } from "../socket";

const App = () => {
    const [classCode, setClassCode] = useState([]);
    const [users, setUsers] = useState([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' },
    ]);

    socket.on("nav to waitroom", (class_code) => {
      setClassCode(class_code);
    });
  
    const handleStartSession = () => {
      // Handle starting the session
      socket.emit("starting_questions");
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