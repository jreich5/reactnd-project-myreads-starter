import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchForm from './SearchForm'

class Search extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
        
        <SearchForm updateSearchBooks={this.props.updateSearchBooks} />
      </div>
    );
  }
}

Search.propTypes = {

};

export default Search;