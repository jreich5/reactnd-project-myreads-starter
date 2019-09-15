import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends Component {

  outputBooks = () => {
    const books = this.props.books;
    if (this.props.shelfBooks) {
      // go through each search book and verify that the id is not in the shelf books; if it is, replace the book with the shelf book
      for (let i = 0; i < books.length; i += 1) {
        const match = this.props.shelfBooks.filter(shelfBook => shelfBook.id === books[i].id);
        books[i] = match[0] || books[i];
      }
    }
    return books.map(book => <Book shelfs={this.props.shelfs} key={book.id} book={book} setShelf={this.props.setShelf} />);
  }

  render() {
    return (
      <ol className="books-grid">
        {this.outputBooks()}
      </ol>
    );
  }
}

BookList.propTypes = {
  shelfs: PropTypes.array.isRequired,
  shelfBooks: PropTypes.array,
  books: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired
};

export default BookList;