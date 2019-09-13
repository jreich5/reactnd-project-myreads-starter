import React, { Component } from 'react';
import ShelfList from './ShelfList'


const shelfs = [
  {
    shelfTitle: "Currently Reading",
    shelfProperty: "currentlyReading"
  },
  {
    shelfTitle: "Want to Read",
    shelfProperty: "wantToRead"
  },
  {
    shelfTitle: "Read",
    shelfProperty: "read"
  }
];

class HomePage extends Component {
  render() {
    return (
      <div className="list-books">
        <ShelfList shelfs={shelfs} books={this.props.books} setShelf={this.props.setShelf} />
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default HomePage;