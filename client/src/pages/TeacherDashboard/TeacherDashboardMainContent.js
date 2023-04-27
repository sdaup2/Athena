import React from "react";

const TeacherDashboardMainContent = ({ classDetails }) => {
  return (
    <div className="teacher-dashboard-main-content">
      <h2>Class Details</h2>
      <p>
        <strong>Class Code:</strong> {classDetails.code}
      </p>
      <h3>Students</h3>
      <ul>
        {classDetails.students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.progress}% complete
          </li>
        ))}
      </ul>
      <h3>Question Sets</h3>
      <ul>
        {classDetails.questionSets.map((questionSet) => (
          <li key={questionSet.id}>{questionSet.name}</li>
        ))}
      </ul>
      <button>Create New Question Set</button>
      <h3>Real-time Questions</h3>
      <ul>
        {classDetails.realtimeQuestions.map((question) => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
      <button>Post New Real-time Question</button>
    </div>
  );
};

export default TeacherDashboardMainContent;
