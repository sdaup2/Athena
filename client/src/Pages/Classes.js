import React, { useState , useEffect } from 'react';
import ClassIcon from "../components/ClassIcon/ClassIcon";
import Footer from '../components/Navigation/Footer';
import './Classes.css';
import Header from '../components/Navigation/Header';
import { socket } from '../socket';

function Classes() {
  const [classes, setClasses] = useState([]);

  const handleAddClass = () => {
    const name = window.prompt('Enter class name:');
  
    if (name) {
      socket.emit("add class", name);
      const newClass = {
        name: name,
      };
      setClasses([...classes, newClass]);
    } else {
      
      window.alert('Please enter a class name and class code.');
    }
  };

  let firebase_data_string = null;
  const handleJoinClass = () => {
    socket.emit("join");
    console.log("Joined Class Comms");
  };

  useEffect(() => {
    // Call the getUserClassList function and update the classes state when the component mounts
    getUserClassList();
  }, []);

  const getUserClassList = () => {
    socket.emit("get_class_list");
    // TC list is all the classes a user is a teacher in
    // SC list is all the classes a user is a student in
    socket.on("all_user_classes", (TClist, SClist) => {
      const userClasses = [...TClist, ...SClist].map((c) => ({ name: c }));
      console.log(userClasses);
      setClasses(userClasses);
    })
  }


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
            <ClassIcon key={i} name={c.name}/>
          ))}
        </div>
        
      </div>
    <Footer />
    </div>
  );
}

export default Classes;
