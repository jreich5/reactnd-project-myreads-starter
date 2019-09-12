import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  currentShelf: PropTypes.string.isRequired,
  
};

export default Book;