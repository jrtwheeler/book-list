import React from "react";

const TableField = ({ fieldName, settingsField }) => {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash"></i>
        </>
      )}
    </div>
  );
};

export default TableField;
