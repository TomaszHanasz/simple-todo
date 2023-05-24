import React from "react";
import { students } from "./studentsData";
import "./studentList.style.css";

const StudentList = () => {
  const showStudents = students.map((el, index) => {
    return (
      <div className="single-student" key={index}>
        <img src={el.picture} className="student-photo" />
        <p className="student">{el.name}</p>
        <p>Enjoys {el.hobby}</p>
      </div>
    );
  });

  return (
    <>
      <div className="student-list-box">
        <h1 className="title">List of students:</h1>
        {showStudents}
      </div>
    </>
  );
};

export default StudentList;
