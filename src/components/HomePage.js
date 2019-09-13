import React, { Component } from 'react';
import ShelfList from './ShelfList'
import { Link } from 'react-router-dom'

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

export default HomePage;