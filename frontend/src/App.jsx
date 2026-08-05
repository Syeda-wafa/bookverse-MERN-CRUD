import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
    <main className="app">
      <header className="hero">
        <p className="subtitle">PERSONAL BOOK STORE</p>

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
    </main>
  );
}

export default App;
