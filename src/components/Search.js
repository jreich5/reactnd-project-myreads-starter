import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'

class Search extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">Close</Link>      
        <SearchForm updateSearchBooks={this.props.updateSearchBooks} />
      </div>
    );
  }
}

Search.propTypes = {
  updateSearchBooks: PropTypes.func.isRequired
};

export default Search;