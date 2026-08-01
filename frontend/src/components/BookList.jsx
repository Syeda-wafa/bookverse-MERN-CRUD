import BookCard from "./BookCard";

function BookList({ books, fetchBooks, setEditingBook }) {
  return (
    <section className="books-section">
      <h2>My Books</h2>

      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              fetchBooks={fetchBooks}
              setEditingBook={setEditingBook}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default BookList;
