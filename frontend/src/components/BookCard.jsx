import { FaUser, FaBook, FaTag, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../services/api";

function BookCard({ book, fetchBooks, setEditingBook }) {
  const handleDelete = async () => {
    if (!window.confirm("Delete this book?")) return;

    try {
      await api.delete(`/books/${book._id}`);

      toast.success("Book deleted successfully!");

      fetchBooks();
    } catch (error) {
      toast.error("Unable to delete book.");
    }
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>

      <p>
        <FaUser /> {book.author}
      </p>

      <p>
        <FaBook /> {book.category}
      </p>

      <p>
        <FaTag /> Rs. {book.price}
      </p>

      <div className="actions">
        <button className="edit-btn" onClick={() => setEditingBook(book)}>
          <FaEdit /> Edit
        </button>

        <button className="delete-btn" onClick={handleDelete}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
