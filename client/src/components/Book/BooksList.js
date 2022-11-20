import React from "react";
import { useSelector } from "react-redux";
const BooksList = ({ books, isLoading }) => {
  const { error } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const booksList =
    books.length > 0
      ? books.map((book) => (
        <li
          className="list-group-item d-flex  justify-content-between align-items-center"
          key={book.id}
        >
          <div>{book.title}</div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">
              Read
            </button>
            <button type="button" className="btn btn-danger" disabled={!isLoggedIn}>
              Delete
            </button>
          </div>
        </li>
      ))
      : "there's no book available!";
  return (
    <div>
      <h2>Books List</h2>
      {error ? (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Oops!</strong> Something went wrong
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : isLoading ? (
        "loading"
      ) : (
        <ul className="list-group">{booksList}</ul>
      )}
    </div>
  );
};

export default BooksList;
