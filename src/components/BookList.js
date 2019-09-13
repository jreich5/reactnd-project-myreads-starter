import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

class BookList extends Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map(book => <Book key={book.id} book={book} setShelf={this.props.setShelf} />)}
        </ol>
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired
};

export default BookList;