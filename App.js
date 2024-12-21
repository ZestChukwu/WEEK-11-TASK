import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Correct imports
import "bootstrap/dist/css/bootstrap.min.css";
import Book_Form from "./AddBook"; // Ensure file exists with correct casing
import Book_UpdateForm from "./BookUpdate"; // Ensure file exists with correct casing
import FncDisplayBooks from "./DsplyBk_fncCompt"; // Ensure file exists with correct casing
import DeleteBook from "./Delete_Book"; // Ensure file exists with correct casing

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <center><h2>Online Library</h2></center>
          <br />
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">Add a Book</Link>
              <Link to="/DisplayBookF1" className="nav-link">Display All Books</Link>
            </div>
          </nav>
          <br />

          <Routes>
            <Route path="/" element={<Book_Form />} /> {/* Form to add a book */}
            <Route path="/DisplayBookF1" element={<FncDisplayBooks />} /> {/* Displays all books */}
            <Route path="/edit/:id" element={<Book_UpdateForm />} /> {/* Edit a specific book */}
            <Route path="/Delete/:id" element={<DeleteBook />} /> {/* Delete a specific book */}
          </Routes>
        </div>
      </Router>
    );
  }
}