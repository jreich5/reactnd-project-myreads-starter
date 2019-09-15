import React, { Component } from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Search from './Search'

class SearchPage extends Component {

  state = {
    searchBooks: []
  }

  updateSearchBooks = (searchTerm) => {
    if (searchTerm.length < 1) {
      this.setState({searchBooks: []});
      return;
    }
    
    BooksAPI.search(searchTerm).then(searchBooks => {
      if (searchBooks.error) {
        this.setState({searchBooks: []});
      } else {
        console.log(searchBooks);
        this.setState({searchBooks});
      }
    }).catch(err => {
      console.log(err);
    });
    
  }

  render() {
    return (
      <div className="search-books">
        <Search updateSearchBooks={this.updateSearchBooks} />
        <div className="search-books-results">
          <BookList shelfBooks={this.props.books} shelfs={this.props.shelfs} books={this.state.searchBooks} setShelf={this.props.setShelf} />
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  shelfs: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired
};

export default SearchPage;