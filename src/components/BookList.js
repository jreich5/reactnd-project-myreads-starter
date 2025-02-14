import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

/**
 * Update the list of books for booklist to include a shelf property for search page results that are in a shelf
 */
const outputBooks = (props) => {
  const books = props.books;
  if (props.shelfBooks) {
    // go through each search book and verify that the id is not in the shelf books; if it is, replace the book with the shelf book
    for (let i = 0; i < books.length; i += 1) {
      const match = props.shelfBooks.filter(shelfBook => shelfBook.id === books[i].id);
      books[i] = match[0] || books[i];
    }
  }
  return books.map(book => <Book shelfs={props.shelfs} key={book.id} book={book} setShelf={props.setShelf} />);
}

const BookList = (props) => (
  <ol className="books-grid">
    {outputBooks(props)}
  </ol>
);

BookList.propTypes = {
  shelfs: PropTypes.array.isRequired,
  shelfBooks: PropTypes.array,
  books: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired
};

export default BookList;