import { useEffect, useState } from "react";

import "./App.css";

import api from "./services/api";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch books.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <header className="hero">
        <span className="subtitle">PERSONAL BOOK STORE</span>

        <h1>📚 BookVerse</h1>

        <p>
          Organize, manage and update your personal library with a beautiful
          dashboard.
        </p>
      </header>

      <BookForm
        fetchBooks={fetchBooks}
        editingBook={editingBook}
        setEditingBook={setEditingBook}
      />

      <BookList
        books={books}
        fetchBooks={fetchBooks}
        setEditingBook={setEditingBook}
      />
    </div>
  );
}

export default App;
