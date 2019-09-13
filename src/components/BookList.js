import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

class BookList extends Component {
  render() {
    return ( 
      <ol className="books-grid">
        {this.props.books.map(book => <Book shelfs={this.props.shelfs} key={book.id} book={book} setShelf={this.props.setShelf} />)}
      </ol>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired
};

export default BookList;