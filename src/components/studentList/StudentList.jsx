import { students } from "./studentsData";
import Card from "../card/Card";
import "./studentList.style.css";
import React from "react";

const StudentList = () => {
  const showStudents = students.map((el, index) => {
    return <Card cardData={el} key={index} />;
  });

  return (
    <>
      <div className="student-list-box">
        <span className="title">
          <h1>List of students:</h1>
        </span>
        {showStudents}
      </div>
    </>
  );
};

export default StudentList;
