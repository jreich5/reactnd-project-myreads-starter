import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';

class ShelfList extends Component {

  getShelfBooks = (shelfProperty, books) => {
    return books.filter(book => book.shelf === shelfProperty);
  }
 
  render() {
    return (
      <div className="list-books-content">
        <div>
          {this.props.shelfs.map(shelf => <Shelf 
            key={shelf.shelfProperty} 
            shelfTitle={shelf.shelfTitle} 
            books={this.getShelfBooks(shelf.shelfProperty, this.props.books)}
            shelfs={this.props.shelfs}
            setShelf={this.props.setShelf} />)}
        </div>
      </div>
    );
  }
  
}

ShelfList.propTypes = {
  books: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired,
  shelfs: PropTypes.array.isRequired
};

export default ShelfList;