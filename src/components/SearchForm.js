import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {

  state = {
    input: ""
  }

  updateInput = (e) => {
    this.setState({input: e.target.value}, () => {
      this.props.updateSearchBooks(this.state.input);
    });
  }

  render() {
    return (
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input value={this.state.input} type="text" onChange={this.updateInput} placeholder="Search by title or author" />
      </div>
    );
  }
}

SearchForm.propTypes = {

};

export default SearchForm;