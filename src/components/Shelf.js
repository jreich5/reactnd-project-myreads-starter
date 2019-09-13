import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList'

class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <BookList shelfs={this.props.shelfs} books={this.props.books} setShelf={this.props.setShelf} />
      </div>
    );
  }
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired,
  shelfTitle: PropTypes.string.isRequired
};

export default Shelf;