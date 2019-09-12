import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import * as BooksAPI from '../BooksAPI'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  populateBooks = () => {
    BooksAPI.getAll().then(books => {
      console.log(books);
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
          <Route exact path="/" render={() => <HomePage books={this.state.books} />} />
          <Route exact path="/search" render={() => <SearchPage books={this.state.books} />} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
