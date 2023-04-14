import React, { useState } from 'react';
import ClassIcon from "../components/ClassIcon/ClassIcon";
import Footer from '../components/Navigation/Footer';
import './Classes.css';
import Header from '../components/Navigation/Header';
import { socket } from '../socket';

function Classes() {
  const [classes, setClasses] = useState([]);

  const handleAddClass = () => {
    const name = window.prompt('Enter class name:');
    const code = window.prompt('Enter class code:');
  
    if (name && code) {
      const newClass = {
        name: name,
        code: code
      };
      setClasses([...classes, newClass]);
    } else {
      window.alert('Please enter a class name and class code.');
    }
  };

  const handleJoinClass = () => {
    socket.emit("join");
    console.log("Joined Class Comms");
    socket.on("back_end_join", (firebase_data) => {
      console.log(firebase_data);
    });
  };

  //add function to handleJoinClass
  //do socket.emit there

  return (
    <div>
    <Header />
      <div className="classes-page">
        <h1>Classes</h1>
        <div className="join-create-class">
          <button onClick={handleJoinClass}>Join Class</button>
          <button onClick={handleAddClass}>Create Class</button>
        </div>
        
        <div className="class-list">
          {classes.map((c, i) => (
            <ClassIcon key={i} name={c.name} code={c.code} />
          ))}
        </div>
        
      </div>
    <Footer />
    </div>
  );
}

export default Classes;
