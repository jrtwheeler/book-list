import React from "react";

const Form = (props) => {
    const {
        title,
        setTitle,
        author,
        isbn,
        setUsbn,
        currentBookId
    } = props;
    
    return (
        <form>
            <label>Title</label>
            <input 
            type="text"
            autoFocus
            required
            value={title}
            onChange={(e) => setAuthor(e.target.value)}></input>
            <label>Author</label>
            <input type="text"></input>
            <label>ISBN#</label>
            <input type="text"></input>
        </form>
    )
}