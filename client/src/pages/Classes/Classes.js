import React, { useState , useEffect } from 'react';
import ClassIcon from "../../components/ClassIcon/ClassIcon";
import Footer from '../../components/Navigation/Footer';
import './Classes.css';
import Header from '../../components/Navigation/Header';
import { socket } from '../../socket';
import { getAuth } from 'firebase/auth';

function Classes() {
  const [classes, setClasses] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;
  let uid = null;
  if (user !== null) {
    uid = user.uid;
  }

  const handleAddClass = () => {
    const name = window.prompt('Enter class name:');
  
    if (name) {
      socket.emit("add class", uid, name);
      getUserClassList();
      //setClasses([...classes, newClass]);
    } else {
      
      window.alert('Please enter a class name and class code.');
    }
  };

  const handleJoinClass = () => {
    const class_code = window.prompt('Enter class code:');
    if (class_code) {
      socket.emit("join", uid, class_code);
      console.log("Joined Class Comms");
      getUserClassList();
    }

  };

  useEffect(() => {
    // Call the getUserClassList function and update the classes state when the component mounts
    getUserClassList();
  }, []);

  const getUserClassList = () => {
    socket.emit("get_class_list", uid);
    // TC list is all the classes a user is a teacher in
    // SC list is all the classes a user is a student in
    socket.on("all_user_classes", (TClist, SClist) => {
      TClist = TClist.sort();
      SClist = SClist.sort();
      const userClasses = [...TClist, ...SClist].map((c) => ({ name: c }));
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
