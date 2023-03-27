import React, { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate.js";
import BookList from "./components/BookList.js";
import axios from "axios";

export default function App() {
  const [books, setBooks] = useState([]);
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    setBooks(
      books.filter((book) => {
        return book.id !== id;
      })
    );
  };
  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    console.log(response);
    const updatedBooks = books.map((book, index) => {
      if (book.id === id) return { ...book, ...response.data };
      return book;
    });
    setBooks(updatedBooks);
  };

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    console.log(response);
    setBooks(response.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    console.log("to add book with title", title);
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    console.log(response);

    setBooks([...books, response]);
    console.log(books);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onDelete={deleteBookById} onEdit={editBookById} books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
