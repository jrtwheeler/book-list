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
    }
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

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id))
  }

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);
    setCurrentBookId(book.bookId);
  };

  const updateBook = (books) => {
    setBooks(books.map((book) => book.bookId === currentBookId ? {...books, bookTitle: title, bookAuthor: author, bookIsbn: isbn } : book))
  };

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInputs();
    if(isInputInvalid()) return;
    !currentBookId ? addBook() : updateBook();
  };

  const cancelEdit = () => {
    clearInputs();
    setCurrentBookId(null);
  }

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
          currentBookId={currentBookId}
          handleSubmit={handleSubmit}
          cancelEdit={cancelEdit}
        />
        <Table books={books} removeBook={removeBook} editBook={editBook}/>
      </div>
    </div>
  );
}

export default App;
