import React from "react";

const TableField = ({fieldName}) => {
    return(
        <div className="tableField">
            {fieldName}
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash"></i>
        </div>
    )
}

export default TableField;