import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  state = {
    shelfSelection: this.props.book.shelf || "none"
  }

  changeSelect = (e) => {
    this.setState({shelfSelection: e.target.value}, () => {
      this.props.setShelf(this.props.book, this.state.shelfSelection);
    });
  }

  /**
   * Build JSX for shelf dropdown
   */
  returnShelfOptions = () => {
    return this.props.shelfs.map(shelf => {
      return <option key={shelf.shelfProperty} value={shelf.shelfProperty}>{shelf.shelfTitle}</option>
    });
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" 
              style={{
                 width: 128, 
                 height: 193, 
                 backgroundImage: (`url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 'none'}})`) 
                }}
            ></div>
            <div className="book-shelf-changer">
              <select value={this.state.shelfSelection} onChange={this.changeSelect}>
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