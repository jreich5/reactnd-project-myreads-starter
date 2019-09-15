import React from 'react';
import ShelfList from './ShelfList';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomePage = (props) => (
  <div className="list-books">
    <ShelfList shelfs={props.shelfs} books={props.books} setShelf={props.setShelf} />
    <div className="open-search">
      <Link to={'/search'}>Add a book</Link>
    </div>
  </div>
);

HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  setShelf: PropTypes.func.isRequired,
  shelfTitle: PropTypes.string.isRequired
};

export default HomePage;