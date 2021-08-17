import React from "react";

const ReadOnlyRow = ({ student, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{student.Enumber}</td>
      <td>{student.Name}</td>
      <td>{student.Email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, student)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(student.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
