import React from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';

const getShelfBooks = (shelfProperty, books) => {
  return books.filter(book => book.shelf === shelfProperty);
}

const ShelfList = (props) => (
  <div className="list-books-content">
    <div>
      {props.shelfs.map(shelf => <Shelf
        key={shelf.shelfProperty}
        shelfTitle={shelf.shelfTitle}
        books={getShelfBooks(shelf.shelfProperty, props.books)}
        shelfs={props.shelfs}
        setShelf={props.setShelf} />)}
    </div>
  </div>
);

ShelfList.propTypes = {
  books: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired,
  shelfs: PropTypes.array.isRequired
};

export default ShelfList;