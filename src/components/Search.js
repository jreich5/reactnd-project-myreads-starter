import React from 'react'
import PropTypes from 'prop-types'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'

const Search = (props) => (
  <div className="search-books-bar">
    <Link to={"/"} className="close-search">Close</Link>
    <SearchForm updateSearchBooks={props.updateSearchBooks} />
  </div>
);

Search.propTypes = {
  updateSearchBooks: PropTypes.func.isRequired
};

export default Search;