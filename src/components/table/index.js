import React from "react";
import TableField from "../table_field";

const Table = (books, removeBook) => {

    return (
        <div className="table">
            <div className="tableHeading">
                <TableField fieldName="Title"/>
                <TableField fieldName="Author"/>
                <TableField fieldName="ISBN#"/>
                <TableField fieldName="Settings"/>
            </div>
            {books.map((book) => (
                <div key={book.bookId} className="tableRow">
                    <TableField fieldName={book.bookTitle}/>
                    <TableField fieldName={book.bookAuthor}/>
                    <TableField fieldName={book.book.Isbn}/>
                    <TableField settingsField/>
                </div>
            ))}
        </div>
    )
};

export default Table;