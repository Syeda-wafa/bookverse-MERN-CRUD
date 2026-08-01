import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

function BookForm({ fetchBooks, editingBook, setEditingBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
  });

  // Fill form when Edit button is clicked
  useEffect(() => {
    if (editingBook) {
      setBook({
        title: editingBook.title,
        author: editingBook.author,
        category: editingBook.category,
        price: editingBook.price,
      });
    }
  }, [editingBook]);

  // Handle Input Change
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  // Add or Update Book
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingBook) {
        // Update Book
        await api.put(`/books/${editingBook._id}`, book);

        toast.success("Book updated successfully!");
      } else {
        // Add Book
        await api.post("/books", book);

        toast.success("Book added successfully!");
      }

      // Clear Form
      setBook({
        title: "",
        author: "",
        category: "",
        price: "",
      });

      setEditingBook(null);

      // Refresh Books
      fetchBooks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  // Cancel Editing
  const handleCancel = () => {
    setEditingBook(null);

    setBook({
      title: "",
      author: "",
      category: "",
      price: "",
    });
  };

  return (
    <section className="form-card">
      <h2>{editingBook ? "Edit Book" : "Add New Book"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-group">
            <label>Book Title</label>

            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Author</label>

            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Category</label>

            <input
              type="text"
              name="category"
              value={book.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Price</label>

            <input
              type="number"
              name="price"
              value={book.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="actions">
          <button type="submit">
            {editingBook ? "Update Book" : "Add Book"}
          </button>

          {editingBook && (
            <button type="button" className="delete-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default BookForm;
