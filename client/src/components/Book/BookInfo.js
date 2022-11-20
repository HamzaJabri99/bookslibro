import React, { Fragment } from "react";

const BookInfo = ({ book }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>

      {book ? (
        <div>
          <p className="fw-bold">Title: {book.title}</p>
          <p className="fw-light">Description: {book.title}</p>
          <p className="fst-italic">Price: {book.price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no post selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
