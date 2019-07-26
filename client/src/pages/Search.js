import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import ResultsList from "../components/ResultsList";
import GOOGLEAPI from "../utils/GOOGLEAPI";
import API from "../utils/API";

class Search extends Component {
  state = {
    googleBooks: {},
    search: "",
    savedBook: {}
  };

  componentDidMount() {
    this.searchBooks("art");
  }

  searchBooks = query => {
    GOOGLEAPI.search(query)
      .then(res => this.setState({ googleBooks: res.data }))
      .catch(err => console.log(err));
  };

  savedBook = query => {
    GOOGLEAPI.save(query)
      .then(res => this.setState({ savedBook: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  handleSaveSubmit = event => {
    event.preventDefault();
      this.savedBook(this.state.save);
      API.saveBook({
        title: this.state.title,
        author: this.state.authors,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link
      })
  };
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // handleSaveSubmit = event => {
  //   event.preventDefault();
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.authors,
  //       description: this.state.description,
  //       image: this.state.image,
  //       link: this.state.link
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  // };
  


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search Google Books</h1>
            </Jumbotron>
            <SearchForm
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <ResultsList googleBooks={this.state.googleBooks} />
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <a href={book.image} target="blank"></a>
                    <a href={book.link} target="blank"></a>
                    <SelectBtn onClick={() => this.saveBook(book._id)}/>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;