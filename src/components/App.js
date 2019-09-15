import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import * as BooksAPI from '../BooksAPI'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SearchPage from './SearchPage'


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

class BooksApp extends React.Component {
  state = {
    books: []
  }

  setShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(BooksAPI.getAll)
      .then(books => {
        this.setState({books});
      });  
  }

  populateBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  componentDidMount() {
    this.populateBooks();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Route exact path="/" render={() => <HomePage shelfs={shelfs} books={this.state.books} setShelf={this.setShelf} />} />
          <Route exact path="/search" render={() => <SearchPage books={this.state.books} shelfs={shelfs} setShelf={this.setShelf} />} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
