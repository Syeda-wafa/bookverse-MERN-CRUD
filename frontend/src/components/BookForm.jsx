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
            <label htmlFor="title">Book Title</label>

            <input
              id="title"
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              placeholder="Enter book title"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="author">Author</label>

            <input
              id="author"
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="category">Category</label>

            <input
              id="category"
              type="text"
              name="category"
              value={book.category}
              onChange={handleChange}
              placeholder="Enter category"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="price">Price</label>

            <input
              id="price"
              type="number"
              name="price"
              value={book.price}
              onChange={handleChange}
              placeholder="Enter price"
              min="0"
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
