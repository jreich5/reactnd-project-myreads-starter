import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

const Shelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfTitle}</h2>
    <div className="bookshelf-books">
      <BookList shelfs={props.shelfs} books={props.books} setShelf={props.setShelf} />
    </div>
  </div>
);

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired,
  shelfTitle: PropTypes.string.isRequired
};

export default Shelf;