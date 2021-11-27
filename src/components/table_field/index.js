import React from "react";

const TableField = ({ fieldName, settingsField, removeBook }) => {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i className="fas fa-edit"></i>
          <i onClick={removeBook} className="fas fa-trash"></i>
        </>
      )}
    </div>
  );
};

export default TableField;
