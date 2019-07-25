import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import GOOGLEAPI from "../utils/GOOGLEAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/Results";
import { Input, FormBtn } from "../components/Search";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      GOOGLEAPI.searchBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  loadBooks = () => {
    GOOGLEAPI.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    GOOGLEAPI.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search Google Books</h1>
            </Jumbotron>
            <form>
              <Input value={this.state.googleSearch} onChange={this.handleInputChange} name="googleSearch" placeholder="Search by keyword, Author, or name" />
              <FormBtn onClick={this.handleFormSubmit} >Search </FormBtn>
            </form>
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
