import React from "react";

const Form = (props) => {
  const { title, setTitle, author, isbn, setIsbn, currentBookId } = props;

  return (
    <form>
      <label>Title</label>
      <input
        type="text"
        autoFocus
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Author</label>
      <input
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>ISBN#</label>
      <input
        type="text"
        requiredvalue={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default Form;
