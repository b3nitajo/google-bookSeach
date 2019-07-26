import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultsList from "./ResultsList";
import GOOGLEAPI from "../utils/GOOGLEAPI";

class Search extends Component {
  state = {
    search: "",
    googleBooks: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchBooks("art");
  }

  searchBooks = query => {
    GOOGLEAPI.search(query)
      .then(res => this.setState({ googleBooks: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

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
            <ResultsList results={this.state.results} />
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