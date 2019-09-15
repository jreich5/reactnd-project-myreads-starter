import React, { Component } from 'react';
import ShelfList from './ShelfList';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class HomePage extends Component {

  render() {
    return (
      <div className="list-books">
        <ShelfList shelfs={this.props.shelfs} books={this.props.books} setShelf={this.props.setShelf} />
        <div className="open-search">
          <Link to={'/search'}>Add a book</Link>
        </div>
      </div>
    );
  }
  
}

HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired,
  shelfTitle: PropTypes.string.isRequired
};

export default HomePage;