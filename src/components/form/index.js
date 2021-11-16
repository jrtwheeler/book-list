import React from "react";

const Form = (props) => {
  const { title, setTitle, author, isbn, setUsbn, currentBookId } = props;

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
        autoFocus
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>ISBN#</label>
      <input type="text"></input>
    </form>
  );
};
