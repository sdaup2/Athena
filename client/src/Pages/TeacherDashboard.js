import React, { useState } from "react";
import Header from "../Navigation/Header";
import Sidebar from "./TeacherDashboard/Sidebar";
import TeacherDashboardMainContent from "./TeacherDashboard/TeacherDashboardMainContent";
import Footer from "../Navigation/Footer";

function TeacherDashboard() {
  const [classDetails, setClassDetails] = useState(null);

  useEffect(() => {
    // make API call to retrieve class details
    // set the classDetails state with the data received from the server
  }, []);

  //hypothetical testing code
  const [classList, setClassList] = useState([
    { id: 1, name: "Class A", code: "ABC123" },
    { id: 2, name: "Class B", code: "DEF456" },
    { id: 3, name: "Class C", code: "GHI789" },
  ]);
  //hypothetical testing code

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <Sidebar classList={classList} />
        <TeacherDashboardMainContent classDetails={classDetails} />
      </div>
      <Footer />
    </div>
  );
}

export default TeacherDashboard;
