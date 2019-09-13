import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  returnShelfOptions = () => {
    return this.props.shelfs.map(shelf => {
      return <option value={shelf.shelfProperty} selected={this.props.book.shelf === shelf.shelfProperty}>{shelf.shelfTitle}</option>
    });
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                {this.returnShelfOptions()}
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  shelfs: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired,
  setShelf: PropTypes.func.isRequired
};

export default Book;