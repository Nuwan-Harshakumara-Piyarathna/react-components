import React, { Fragment, useState } from "react";
import "./css/EditableTable.css";
import data from "./data/mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "../Home/components/ReadOnlyRow";
import EditableRow from "../Home/components/EditableRow";

const EditableTable = () => {
  const [students, setStudents] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Enumber: "",
    Name: "",
    Email: "",
  });
  const [editFormData, setEditFormData] = useState({
    Enumber: "",
    Name: "",
    Email: "",
  });
  const [editStudentId, setEditStudentId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault(); //prevent form doing post request

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      id: nanoid(),
      Enumber: addFormData.Enumber,
      Name: addFormData.Name,
      Email: addFormData.Email,
    };

    const newStudents = [...students, newStudent];
    setStudents(newStudents);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedStudent = {
      id: editStudentId,
      Enumber: editFormData.Enumber,
      Name: editFormData.Name,
      Email: editFormData.Email,
    };

    const newStudents = [...students];
    const index = students.findIndex((student) => student.id === editStudentId);
    newStudents[index] = editedStudent;
    setStudents(newStudents);
    setEditStudentId(null);
  };

  const handleEditClick = (event, student) => {
    event.preventDefault();

    setEditStudentId(student.id);

    const fromValues = {
      Enumber: student.Enumber,
      Name: student.Name,
      Email: student.Email,
    };

    setEditFormData(fromValues);
  };

  const handleCancelClick = () => {
    setEditStudentId(null);
  };

  const handleDeleteClick = (studentId) => {
    const newStudents = students.filter((student) => student.id != studentId);
    setStudents(newStudents);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>E number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <Fragment>
                {editStudentId === student.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    student={student}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a Student</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Enumber"
          required="required"
          placeholder="Enter E number ..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Enter Name ..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="Email"
          required="required"
          placeholder="Enter Email ..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EditableTable;
