import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter E number ..."
          name="Enumber"
          value={editFormData.Enumber}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Enter Name ..."
          value={editFormData.Name}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="Email"
          required="required"
          placeholder="Enter Email ..."
          value={editFormData.Email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
