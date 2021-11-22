import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/form";
import Table from "./components/table";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: title,
      bookAuthor: author,
      bookIsbn: isbn,
      bookId: uuidv4(),
    },
  ]);

  const isInputInvalid = () => {
    return (title.trim() === "" || author.trim() === "" || isbn.trim() === "");
  };

  const addBook = () => {
    setBooks([
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuidv4(),
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook();
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          currentBookId={setCurrentBookId}
          handleSubmit={handleSubmit}
        />
        <Table />
      </div>
    </div>
  );
}

export default App;
